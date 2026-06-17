# `googleVertexAiTensorboardExperiment` Submodule <a name="`googleVertexAiTensorboardExperiment` Submodule" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiTensorboardExperiment <a name="GoogleVertexAiTensorboardExperiment" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment google_vertex_ai_tensorboard_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperiment;

GoogleVertexAiTensorboardExperiment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .tensorboard(java.lang.String)
    .tensorboardExperimentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .source(java.lang.String)
//  .timeouts(GoogleVertexAiTensorboardExperimentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Tensorboard Experiment. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.tensorboard">tensorboard</a></code> | <code>java.lang.String</code> | The Tensorboard instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.tensorboardExperimentId">tensorboardExperimentId</a></code> | <code>java.lang.String</code> | The ID to use for the Tensorboard experiment, which becomes the final component of the Tensorboard experiment's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of this TensorboardExperiment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User provided name of this TensorboardExperiment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#id GoogleVertexAiTensorboardExperiment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your TensorboardExperiment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#project GoogleVertexAiTensorboardExperiment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Source of the TensorboardExperiment. Example: a custom training job. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Tensorboard Experiment. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#location GoogleVertexAiTensorboardExperiment#location}

---

##### `tensorboard`<sup>Required</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.tensorboard"></a>

- *Type:* java.lang.String

The Tensorboard instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#tensorboard GoogleVertexAiTensorboardExperiment#tensorboard}

---

##### `tensorboardExperimentId`<sup>Required</sup> <a name="tensorboardExperimentId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.tensorboardExperimentId"></a>

- *Type:* java.lang.String

The ID to use for the Tensorboard experiment, which becomes the final component of the Tensorboard experiment's resource name.

This value should be 1-128 characters, and valid characters
are '/a-z-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#tensorboard_experiment_id GoogleVertexAiTensorboardExperiment#tensorboard_experiment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#deletion_policy GoogleVertexAiTensorboardExperiment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of this TensorboardExperiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#description GoogleVertexAiTensorboardExperiment#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User provided name of this TensorboardExperiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#display_name GoogleVertexAiTensorboardExperiment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#id GoogleVertexAiTensorboardExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your TensorboardExperiment.

Label keys and values cannot be longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.
No more than 64 user labels can be associated with one Dataset (System
labels are excluded).

See https://goo.gl/xmQnxf for more information and examples of labels.
System reserved label keys are prefixed with 'aiplatform.googleapis.com/'
and are immutable. The following system labels exist for each Dataset:

* 'aiplatform.googleapis.com/dataset_metadata_schema': output only. Its
  value is the metadata_schema's title.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#labels GoogleVertexAiTensorboardExperiment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#project GoogleVertexAiTensorboardExperiment#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Source of the TensorboardExperiment. Example: a custom training job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#source GoogleVertexAiTensorboardExperiment#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#timeouts GoogleVertexAiTensorboardExperiment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiTensorboardExperimentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetProject"></a>

```java
public void resetProject()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetSource"></a>

```java
public void resetSource()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiTensorboardExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperiment;

GoogleVertexAiTensorboardExperiment.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperiment;

GoogleVertexAiTensorboardExperiment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperiment;

GoogleVertexAiTensorboardExperiment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperiment;

GoogleVertexAiTensorboardExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiTensorboardExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiTensorboardExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiTensorboardExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiTensorboardExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiTensorboardExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference">GoogleVertexAiTensorboardExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboardExperimentIdInput">tensorboardExperimentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboardInput">tensorboardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboard">tensorboard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboardExperimentId">tensorboardExperimentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.timeouts"></a>

```java
public GoogleVertexAiTensorboardExperimentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference">GoogleVertexAiTensorboardExperimentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `tensorboardExperimentIdInput`<sup>Optional</sup> <a name="tensorboardExperimentIdInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboardExperimentIdInput"></a>

```java
public java.lang.String getTensorboardExperimentIdInput();
```

- *Type:* java.lang.String

---

##### `tensorboardInput`<sup>Optional</sup> <a name="tensorboardInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboardInput"></a>

```java
public java.lang.String getTensorboardInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiTensorboardExperimentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `tensorboard`<sup>Required</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboard"></a>

```java
public java.lang.String getTensorboard();
```

- *Type:* java.lang.String

---

##### `tensorboardExperimentId`<sup>Required</sup> <a name="tensorboardExperimentId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tensorboardExperimentId"></a>

```java
public java.lang.String getTensorboardExperimentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperiment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiTensorboardExperimentConfig <a name="GoogleVertexAiTensorboardExperimentConfig" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperimentConfig;

GoogleVertexAiTensorboardExperimentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .tensorboard(java.lang.String)
    .tensorboardExperimentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .source(java.lang.String)
//  .timeouts(GoogleVertexAiTensorboardExperimentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Tensorboard Experiment. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.tensorboard">tensorboard</a></code> | <code>java.lang.String</code> | The Tensorboard instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.tensorboardExperimentId">tensorboardExperimentId</a></code> | <code>java.lang.String</code> | The ID to use for the Tensorboard experiment, which becomes the final component of the Tensorboard experiment's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of this TensorboardExperiment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User provided name of this TensorboardExperiment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#id GoogleVertexAiTensorboardExperiment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your TensorboardExperiment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#project GoogleVertexAiTensorboardExperiment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.source">source</a></code> | <code>java.lang.String</code> | Source of the TensorboardExperiment. Example: a custom training job. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Tensorboard Experiment. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#location GoogleVertexAiTensorboardExperiment#location}

---

##### `tensorboard`<sup>Required</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.tensorboard"></a>

```java
public java.lang.String getTensorboard();
```

- *Type:* java.lang.String

The Tensorboard instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#tensorboard GoogleVertexAiTensorboardExperiment#tensorboard}

---

##### `tensorboardExperimentId`<sup>Required</sup> <a name="tensorboardExperimentId" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.tensorboardExperimentId"></a>

```java
public java.lang.String getTensorboardExperimentId();
```

- *Type:* java.lang.String

The ID to use for the Tensorboard experiment, which becomes the final component of the Tensorboard experiment's resource name.

This value should be 1-128 characters, and valid characters
are '/a-z-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#tensorboard_experiment_id GoogleVertexAiTensorboardExperiment#tensorboard_experiment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#deletion_policy GoogleVertexAiTensorboardExperiment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of this TensorboardExperiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#description GoogleVertexAiTensorboardExperiment#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User provided name of this TensorboardExperiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#display_name GoogleVertexAiTensorboardExperiment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#id GoogleVertexAiTensorboardExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your TensorboardExperiment.

Label keys and values cannot be longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.
No more than 64 user labels can be associated with one Dataset (System
labels are excluded).

See https://goo.gl/xmQnxf for more information and examples of labels.
System reserved label keys are prefixed with 'aiplatform.googleapis.com/'
and are immutable. The following system labels exist for each Dataset:

* 'aiplatform.googleapis.com/dataset_metadata_schema': output only. Its
  value is the metadata_schema's title.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#labels GoogleVertexAiTensorboardExperiment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#project GoogleVertexAiTensorboardExperiment#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Source of the TensorboardExperiment. Example: a custom training job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#source GoogleVertexAiTensorboardExperiment#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentConfig.property.timeouts"></a>

```java
public GoogleVertexAiTensorboardExperimentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#timeouts GoogleVertexAiTensorboardExperiment#timeouts}

---

### GoogleVertexAiTensorboardExperimentTimeouts <a name="GoogleVertexAiTensorboardExperimentTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperimentTimeouts;

GoogleVertexAiTensorboardExperimentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#create GoogleVertexAiTensorboardExperiment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#delete GoogleVertexAiTensorboardExperiment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#update GoogleVertexAiTensorboardExperiment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#create GoogleVertexAiTensorboardExperiment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#delete GoogleVertexAiTensorboardExperiment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vertex_ai_tensorboard_experiment#update GoogleVertexAiTensorboardExperiment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiTensorboardExperimentTimeoutsOutputReference <a name="GoogleVertexAiTensorboardExperimentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_tensorboard_experiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference;

new GoogleVertexAiTensorboardExperimentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiTensorboardExperimentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTensorboardExperiment.GoogleVertexAiTensorboardExperimentTimeouts">GoogleVertexAiTensorboardExperimentTimeouts</a>

---



