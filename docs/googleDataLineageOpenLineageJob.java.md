# `googleDataLineageOpenLineageJob` Submodule <a name="`googleDataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageOpenLineageJob <a name="GoogleDataLineageOpenLineageJob" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJob;

GoogleDataLineageOpenLineageJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .input(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInput>)
//  .output(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutput>)
//  .timeouts(GoogleDataLineageOpenLineageJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.input">input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>></code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.output">output</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>></code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.input"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.output"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput"></a>

```java
public void putInput(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput"></a>

```java
public void putOutput(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataLineageOpenLineageJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput"></a>

```java
public void resetInput()
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJob;

GoogleDataLineageOpenLineageJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJob;

GoogleDataLineageOpenLineageJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJob;

GoogleDataLineageOpenLineageJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJob;

GoogleDataLineageOpenLineageJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataLineageOpenLineageJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataLineageOpenLineageJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input">input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output">output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process">process</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run">run</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput">inputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput">outputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input"></a>

```java
public GoogleDataLineageOpenLineageJobInputList getInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output"></a>

```java
public GoogleDataLineageOpenLineageJobOutputList getOutput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a>

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process"></a>

```java
public java.lang.String getProcess();
```

- *Type:* java.lang.String

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts"></a>

```java
public GoogleDataLineageOpenLineageJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInput> getInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutput> getOutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageOpenLineageJobConfig <a name="GoogleDataLineageOpenLineageJobConfig" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobConfig;

GoogleDataLineageOpenLineageJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .input(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInput>)
//  .output(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutput>)
//  .timeouts(GoogleDataLineageOpenLineageJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input">input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>></code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output">output</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>></code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInput> getInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutput> getOutput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts"></a>

```java
public GoogleDataLineageOpenLineageJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

### GoogleDataLineageOpenLineageJobInput <a name="GoogleDataLineageOpenLineageJobInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInput;

GoogleDataLineageOpenLineageJobInput.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .catalog(GoogleDataLineageOpenLineageJobInputCatalog)
//  .symlink(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInputSymlink>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink">symlink</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>></code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog"></a>

```java
public GoogleDataLineageOpenLineageJobInputCatalog getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInputSymlink> getSymlink();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>>

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobInputCatalog <a name="GoogleDataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputCatalog;

GoogleDataLineageOpenLineageJobInputCatalog.builder()
    .framework(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework">framework</a></code> | <code>java.lang.String</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name">name</a></code> | <code>java.lang.String</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type">type</a></code> | <code>java.lang.String</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobInputSymlink <a name="GoogleDataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputSymlink;

GoogleDataLineageOpenLineageJobInputSymlink.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name">name</a></code> | <code>java.lang.String</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type">type</a></code> | <code>java.lang.String</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutput <a name="GoogleDataLineageOpenLineageJobOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutput;

GoogleDataLineageOpenLineageJobOutput.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .catalog(GoogleDataLineageOpenLineageJobOutputCatalog)
//  .columnLineage(GoogleDataLineageOpenLineageJobOutputColumnLineage)
//  .symlink(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputSymlink>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink">symlink</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>></code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog"></a>

```java
public GoogleDataLineageOpenLineageJobOutputCatalog getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `columnLineage`<sup>Optional</sup> <a name="columnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineage getColumnLineage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#column_lineage GoogleDataLineageOpenLineageJob#column_lineage}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputSymlink> getSymlink();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>>

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobOutputCatalog <a name="GoogleDataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputCatalog;

GoogleDataLineageOpenLineageJobOutputCatalog.builder()
    .framework(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework">framework</a></code> | <code>java.lang.String</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name">name</a></code> | <code>java.lang.String</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type">type</a></code> | <code>java.lang.String</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineage <a name="GoogleDataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineage;

GoogleDataLineageOpenLineageJobOutputColumnLineage.builder()
    .field(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageField>)
//  .datasetInput(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field">field</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>></code> | field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">datasetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>></code> | dataset_input block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageField> getField();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput> getDatasetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput;

GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.builder()
    .field(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .transformation(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">field</a></code> | <code>java.lang.String</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">transformation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>></code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> getTransformation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation;

GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.builder()
    .type(java.lang.String)
//  .subtype(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">type</a></code> | <code>java.lang.String</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">subtype</a></code> | <code>java.lang.String</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageField <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageField;

GoogleDataLineageOpenLineageJobOutputColumnLineageField.builder()
    .input(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input">input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>></code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name">name</a></code> | <code>java.lang.String</code> | Output field name. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput> getInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput;

GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.builder()
    .field(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .transformation(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">field</a></code> | <code>java.lang.String</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">name</a></code> | <code>java.lang.String</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">transformation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>></code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> getTransformation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation;

GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.builder()
    .type(java.lang.String)
//  .subtype(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">type</a></code> | <code>java.lang.String</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">subtype</a></code> | <code>java.lang.String</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputSymlink <a name="GoogleDataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputSymlink;

GoogleDataLineageOpenLineageJobOutputSymlink.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name">name</a></code> | <code>java.lang.String</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type">type</a></code> | <code>java.lang.String</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobTimeouts <a name="GoogleDataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobTimeouts;

GoogleDataLineageOpenLineageJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageOpenLineageJobInputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputCatalogOutputReference;

new GoogleDataLineageOpenLineageJobInputCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```java
public GoogleDataLineageOpenLineageJobInputCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---


### GoogleDataLineageOpenLineageJobInputList <a name="GoogleDataLineageOpenLineageJobInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputList;

new GoogleDataLineageOpenLineageJobInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get"></a>

```java
public GoogleDataLineageOpenLineageJobInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>>

---


### GoogleDataLineageOpenLineageJobInputOutputReference <a name="GoogleDataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputOutputReference;

new GoogleDataLineageOpenLineageJobInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```java
public void putCatalog(GoogleDataLineageOpenLineageJobInputCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```java
public void putSymlink(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInputSymlink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```java
public void resetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```java
public GoogleDataLineageOpenLineageJobInputCatalogOutputReference getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```java
public GoogleDataLineageOpenLineageJobInputSymlinkList getSymlink();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```java
public GoogleDataLineageOpenLineageJobInputCatalog getCatalogInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInputSymlink> getSymlinkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>

---


### GoogleDataLineageOpenLineageJobInputSymlinkList <a name="GoogleDataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputSymlinkList;

new GoogleDataLineageOpenLineageJobInputSymlinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get"></a>

```java
public GoogleDataLineageOpenLineageJobInputSymlinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobInputSymlink> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>>

---


### GoogleDataLineageOpenLineageJobInputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference;

new GoogleDataLineageOpenLineageJobInputSymlinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobInputSymlink getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>

---


### GoogleDataLineageOpenLineageJobOutputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference;

new GoogleDataLineageOpenLineageJobOutputCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```java
public GoogleDataLineageOpenLineageJobOutputCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```java
public void putTransformation(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```java
public void resetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList getTransformation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> getTransformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```java
public void resetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```java
public java.lang.String getSubtypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```java
public void putTransformation(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```java
public void resetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList getTransformation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> getTransformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```java
public void resetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```java
public java.lang.String getSubtypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageField> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">putInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```java
public void putInput(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">inputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList getInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput> getInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference;

new GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">putDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">resetDatasetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetInput` <a name="putDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```java
public void putDatasetInput(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

---

##### `putField` <a name="putField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```java
public void putField(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>>

---

##### `resetDatasetInput` <a name="resetDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```java
public void resetDatasetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">field</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">datasetInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">fieldInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Required</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList getDatasetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList getField();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `datasetInputInput`<sup>Optional</sup> <a name="datasetInputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput> getDatasetInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputColumnLineageField> getFieldInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---


### GoogleDataLineageOpenLineageJobOutputList <a name="GoogleDataLineageOpenLineageJobOutputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputList;

new GoogleDataLineageOpenLineageJobOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>>

---


### GoogleDataLineageOpenLineageJobOutputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputOutputReference;

new GoogleDataLineageOpenLineageJobOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage">putColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">resetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```java
public void putCatalog(GoogleDataLineageOpenLineageJobOutputCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `putColumnLineage` <a name="putColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```java
public void putColumnLineage(GoogleDataLineageOpenLineageJobOutputColumnLineage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```java
public void putSymlink(IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputSymlink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetColumnLineage` <a name="resetColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```java
public void resetColumnLineage()
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```java
public void resetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">columnLineageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```java
public GoogleDataLineageOpenLineageJobOutputCatalogOutputReference getCatalog();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `columnLineage`<sup>Required</sup> <a name="columnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference getColumnLineage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```java
public GoogleDataLineageOpenLineageJobOutputSymlinkList getSymlink();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```java
public GoogleDataLineageOpenLineageJobOutputCatalog getCatalogInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `columnLineageInput`<sup>Optional</sup> <a name="columnLineageInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```java
public GoogleDataLineageOpenLineageJobOutputColumnLineage getColumnLineageInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputSymlink> getSymlinkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>

---


### GoogleDataLineageOpenLineageJobOutputSymlinkList <a name="GoogleDataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputSymlinkList;

new GoogleDataLineageOpenLineageJobOutputSymlinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get"></a>

```java
public GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataLineageOpenLineageJobOutputSymlink> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>>

---


### GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference;

new GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>

---


### GoogleDataLineageOpenLineageJobTimeoutsOutputReference <a name="GoogleDataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_data_lineage_open_lineage_job.GoogleDataLineageOpenLineageJobTimeoutsOutputReference;

new GoogleDataLineageOpenLineageJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataLineageOpenLineageJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---



