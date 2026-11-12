# `googleVertexAiTrainingPipeline` Submodule <a name="`googleVertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiTrainingPipeline <a name="GoogleVertexAiTrainingPipeline" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipeline;

GoogleVertexAiTrainingPipeline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .modelId(java.lang.String)
    .trainingTaskDefinition(java.lang.String)
    .trainingTaskInputs(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .encryptionSpec(GoogleVertexAiTrainingPipelineEncryptionSpec)
//  .id(java.lang.String)
//  .inputDataConfig(GoogleVertexAiTrainingPipelineInputDataConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .modelToUpload(GoogleVertexAiTrainingPipelineModelToUpload)
//  .parentModel(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiTrainingPipelineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelId">modelId</a></code> | <code>java.lang.String</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition">trainingTaskDefinition</a></code> | <code>java.lang.String</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs">trainingTaskInputs</a></code> | <code>java.lang.String</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelToUpload">modelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.parentModel">parentModel</a></code> | <code>java.lang.String</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelId"></a>

- *Type:* java.lang.String

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_id GoogleVertexAiTrainingPipeline#model_id}

---

##### `trainingTaskDefinition`<sup>Required</sup> <a name="trainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition"></a>

- *Type:* java.lang.String

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_definition GoogleVertexAiTrainingPipeline#training_task_definition}

---

##### `trainingTaskInputs`<sup>Required</sup> <a name="trainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs"></a>

- *Type:* java.lang.String

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_inputs GoogleVertexAiTrainingPipeline#training_task_inputs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deletion_policy GoogleVertexAiTrainingPipeline#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#input_data_config GoogleVertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `modelToUpload`<sup>Optional</sup> <a name="modelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelToUpload"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_to_upload GoogleVertexAiTrainingPipeline#model_to_upload}

---

##### `parentModel`<sup>Optional</sup> <a name="parentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.parentModel"></a>

- *Type:* java.lang.String

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parent_model GoogleVertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#region GoogleVertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeouts GoogleVertexAiTrainingPipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload">putModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig">resetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload">resetModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel">resetParentModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleVertexAiTrainingPipelineEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig"></a>

```java
public void putInputDataConfig(GoogleVertexAiTrainingPipelineInputDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `putModelToUpload` <a name="putModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload"></a>

```java
public void putModelToUpload(GoogleVertexAiTrainingPipelineModelToUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiTrainingPipelineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId"></a>

```java
public void resetId()
```

##### `resetInputDataConfig` <a name="resetInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig"></a>

```java
public void resetInputDataConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetModelToUpload` <a name="resetModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload"></a>

```java
public void resetModelToUpload()
```

##### `resetParentModel` <a name="resetParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel"></a>

```java
public void resetParentModel()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipeline;

GoogleVertexAiTrainingPipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipeline;

GoogleVertexAiTrainingPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipeline;

GoogleVertexAiTrainingPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipeline;

GoogleVertexAiTrainingPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiTrainingPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiTrainingPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload">modelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata">trainingTaskMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput">modelToUploadInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput">parentModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput">trainingTaskDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput">trainingTaskInputsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel">parentModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition">trainingTaskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs">trainingTaskInputs</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec"></a>

```java
public GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error"></a>

```java
public GoogleVertexAiTrainingPipelineErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a>

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigOutputReference getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `modelToUpload`<sup>Required</sup> <a name="modelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadOutputReference getModelToUpload();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts"></a>

```java
public GoogleVertexAiTrainingPipelineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `trainingTaskMetadata`<sup>Required</sup> <a name="trainingTaskMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```java
public java.lang.String getTrainingTaskMetadata();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```java
public GoogleVertexAiTrainingPipelineEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfig getInputDataConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `modelToUploadInput`<sup>Optional</sup> <a name="modelToUploadInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUpload getModelToUploadInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `parentModelInput`<sup>Optional</sup> <a name="parentModelInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput"></a>

```java
public java.lang.String getParentModelInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiTrainingPipelineTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---

##### `trainingTaskDefinitionInput`<sup>Optional</sup> <a name="trainingTaskDefinitionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```java
public java.lang.String getTrainingTaskDefinitionInput();
```

- *Type:* java.lang.String

---

##### `trainingTaskInputsInput`<sup>Optional</sup> <a name="trainingTaskInputsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```java
public java.lang.String getTrainingTaskInputsInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `parentModel`<sup>Required</sup> <a name="parentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel"></a>

```java
public java.lang.String getParentModel();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `trainingTaskDefinition`<sup>Required</sup> <a name="trainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```java
public java.lang.String getTrainingTaskDefinition();
```

- *Type:* java.lang.String

---

##### `trainingTaskInputs`<sup>Required</sup> <a name="trainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```java
public java.lang.String getTrainingTaskInputs();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiTrainingPipelineConfig <a name="GoogleVertexAiTrainingPipelineConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineConfig;

GoogleVertexAiTrainingPipelineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .modelId(java.lang.String)
    .trainingTaskDefinition(java.lang.String)
    .trainingTaskInputs(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .encryptionSpec(GoogleVertexAiTrainingPipelineEncryptionSpec)
//  .id(java.lang.String)
//  .inputDataConfig(GoogleVertexAiTrainingPipelineInputDataConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .modelToUpload(GoogleVertexAiTrainingPipelineModelToUpload)
//  .parentModel(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiTrainingPipelineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition">trainingTaskDefinition</a></code> | <code>java.lang.String</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs">trainingTaskInputs</a></code> | <code>java.lang.String</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload">modelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel">parentModel</a></code> | <code>java.lang.String</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_id GoogleVertexAiTrainingPipeline#model_id}

---

##### `trainingTaskDefinition`<sup>Required</sup> <a name="trainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```java
public java.lang.String getTrainingTaskDefinition();
```

- *Type:* java.lang.String

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_definition GoogleVertexAiTrainingPipeline#training_task_definition}

---

##### `trainingTaskInputs`<sup>Required</sup> <a name="trainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```java
public java.lang.String getTrainingTaskInputs();
```

- *Type:* java.lang.String

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_inputs GoogleVertexAiTrainingPipeline#training_task_inputs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deletion_policy GoogleVertexAiTrainingPipeline#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```java
public GoogleVertexAiTrainingPipelineEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfig getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#input_data_config GoogleVertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `modelToUpload`<sup>Optional</sup> <a name="modelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUpload getModelToUpload();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_to_upload GoogleVertexAiTrainingPipeline#model_to_upload}

---

##### `parentModel`<sup>Optional</sup> <a name="parentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel"></a>

```java
public java.lang.String getParentModel();
```

- *Type:* java.lang.String

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parent_model GoogleVertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#region GoogleVertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts"></a>

```java
public GoogleVertexAiTrainingPipelineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeouts GoogleVertexAiTrainingPipeline#timeouts}

---

### GoogleVertexAiTrainingPipelineEncryptionSpec <a name="GoogleVertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineEncryptionSpec;

GoogleVertexAiTrainingPipelineEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineError <a name="GoogleVertexAiTrainingPipelineError" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineError;

GoogleVertexAiTrainingPipelineError.builder()
    .build();
```


### GoogleVertexAiTrainingPipelineInputDataConfig <a name="GoogleVertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfig;

GoogleVertexAiTrainingPipelineInputDataConfig.builder()
    .datasetId(java.lang.String)
//  .annotationSchemaUri(java.lang.String)
//  .annotationsFilter(java.lang.String)
//  .bigqueryDestination(GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination)
//  .filterSplit(GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit)
//  .fractionSplit(GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit)
//  .gcsDestination(GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination)
//  .persistMlUseAssignment(java.lang.Boolean|IResolvable)
//  .predefinedSplit(GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit)
//  .savedQueryId(java.lang.String)
//  .stratifiedSplit(GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit)
//  .timestampSplit(GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">annotationSchemaUri</a></code> | <code>java.lang.String</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">annotationsFilter</a></code> | <code>java.lang.String</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit">filterSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit">fractionSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination">gcsDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">persistMlUseAssignment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">predefinedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId">savedQueryId</a></code> | <code>java.lang.String</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">stratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit">timestampSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#dataset_id GoogleVertexAiTrainingPipeline#dataset_id}

---

##### `annotationSchemaUri`<sup>Optional</sup> <a name="annotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```java
public java.lang.String getAnnotationSchemaUri();
```

- *Type:* java.lang.String

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotation_schema_uri GoogleVertexAiTrainingPipeline#annotation_schema_uri}

---

##### `annotationsFilter`<sup>Optional</sup> <a name="annotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```java
public java.lang.String getAnnotationsFilter();
```

- *Type:* java.lang.String

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotations_filter GoogleVertexAiTrainingPipeline#annotations_filter}

---

##### `bigqueryDestination`<sup>Optional</sup> <a name="bigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination getBigqueryDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#bigquery_destination GoogleVertexAiTrainingPipeline#bigquery_destination}

---

##### `filterSplit`<sup>Optional</sup> <a name="filterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit getFilterSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#filter_split GoogleVertexAiTrainingPipeline#filter_split}

---

##### `fractionSplit`<sup>Optional</sup> <a name="fractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit getFractionSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#fraction_split GoogleVertexAiTrainingPipeline#fraction_split}

---

##### `gcsDestination`<sup>Optional</sup> <a name="gcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination getGcsDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#gcs_destination GoogleVertexAiTrainingPipeline#gcs_destination}

---

##### `persistMlUseAssignment`<sup>Optional</sup> <a name="persistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```java
public java.lang.Boolean|IResolvable getPersistMlUseAssignment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#persist_ml_use_assignment GoogleVertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `predefinedSplit`<sup>Optional</sup> <a name="predefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit getPredefinedSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predefined_split GoogleVertexAiTrainingPipeline#predefined_split}

---

##### `savedQueryId`<sup>Optional</sup> <a name="savedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```java
public java.lang.String getSavedQueryId();
```

- *Type:* java.lang.String

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#saved_query_id GoogleVertexAiTrainingPipeline#saved_query_id}

---

##### `stratifiedSplit`<sup>Optional</sup> <a name="stratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit getStratifiedSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#stratified_split GoogleVertexAiTrainingPipeline#stratified_split}

---

##### `timestampSplit`<sup>Optional</sup> <a name="timestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit getTimestampSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timestamp_split GoogleVertexAiTrainingPipeline#timestamp_split}

---

### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination;

GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.builder()
    .outputUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | The BigQuery table to which the output is to be written. |

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri GoogleVertexAiTrainingPipeline#output_uri}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit;

GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.builder()
    .testFilter(java.lang.String)
    .trainingFilter(java.lang.String)
    .validationFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">testFilter</a></code> | <code>java.lang.String</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">trainingFilter</a></code> | <code>java.lang.String</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">validationFilter</a></code> | <code>java.lang.String</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `testFilter`<sup>Required</sup> <a name="testFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```java
public java.lang.String getTestFilter();
```

- *Type:* java.lang.String

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_filter GoogleVertexAiTrainingPipeline#test_filter}

---

##### `trainingFilter`<sup>Required</sup> <a name="trainingFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```java
public java.lang.String getTrainingFilter();
```

- *Type:* java.lang.String

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_filter GoogleVertexAiTrainingPipeline#training_filter}

---

##### `validationFilter`<sup>Required</sup> <a name="validationFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```java
public java.lang.String getValidationFilter();
```

- *Type:* java.lang.String

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_filter GoogleVertexAiTrainingPipeline#validation_filter}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit;

GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.builder()
//  .testFraction(java.lang.Number)
//  .trainingFraction(java.lang.Number)
//  .validationFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `testFraction`<sup>Optional</sup> <a name="testFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `trainingFraction`<sup>Optional</sup> <a name="trainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `validationFraction`<sup>Optional</sup> <a name="validationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination;

GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.builder()
    .outputUriPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">outputUriPrefix</a></code> | <code>java.lang.String</code> | The Cloud Storage URI prefix to write to. |

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```java
public java.lang.String getOutputUriPrefix();
```

- *Type:* java.lang.String

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri_prefix GoogleVertexAiTrainingPipeline#output_uri_prefix}

---

### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit;

GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.builder()
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">key</a></code> | <code>java.lang.String</code> | The key is a name of one of the Dataset's data columns. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit;

GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.builder()
    .key(java.lang.String)
//  .testFraction(java.lang.Number)
//  .trainingFraction(java.lang.Number)
//  .validationFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">key</a></code> | <code>java.lang.String</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `testFraction`<sup>Optional</sup> <a name="testFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `trainingFraction`<sup>Optional</sup> <a name="trainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `validationFraction`<sup>Optional</sup> <a name="validationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit;

GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.builder()
    .key(java.lang.String)
//  .testFraction(java.lang.Number)
//  .trainingFraction(java.lang.Number)
//  .validationFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">key</a></code> | <code>java.lang.String</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `testFraction`<sup>Optional</sup> <a name="testFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `trainingFraction`<sup>Optional</sup> <a name="trainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `validationFraction`<sup>Optional</sup> <a name="validationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineModelToUpload <a name="GoogleVertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUpload;

GoogleVertexAiTrainingPipelineModelToUpload.builder()
    .displayName(java.lang.String)
//  .artifactUri(java.lang.String)
//  .containerSpec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpec)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec)
//  .explanationSpec(GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .versionAliases(java.util.List<java.lang.String>)
//  .versionDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri">artifactUri</a></code> | <code>java.lang.String</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec">explanationSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases">versionAliases</a></code> | <code>java.util.List<java.lang.String></code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | The description of this version. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `artifactUri`<sup>Optional</sup> <a name="artifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```java
public java.lang.String getArtifactUri();
```

- *Type:* java.lang.String

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#artifact_uri GoogleVertexAiTrainingPipeline#artifact_uri}

---

##### `containerSpec`<sup>Optional</sup> <a name="containerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpec getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_spec GoogleVertexAiTrainingPipeline#container_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#description GoogleVertexAiTrainingPipeline#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `explanationSpec`<sup>Optional</sup> <a name="explanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec getExplanationSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#explanation_spec GoogleVertexAiTrainingPipeline#explanation_spec}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `versionAliases`<sup>Optional</sup> <a name="versionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```java
public java.util.List<java.lang.String> getVersionAliases();
```

- *Type:* java.util.List<java.lang.String>

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_aliases GoogleVertexAiTrainingPipeline#version_aliases}

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_description GoogleVertexAiTrainingPipeline#version_description}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.builder()
    .imageUri(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .deploymentTimeout(java.lang.String)
//  .env(IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv>)
//  .grpcPorts(IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts>)
//  .healthProbe(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe)
//  .healthRoute(java.lang.String)
//  .ports(IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts>)
//  .predictRoute(java.lang.String)
//  .sharedMemorySizeMb(java.lang.String)
//  .startupProbe(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">deploymentTimeout</a></code> | <code>java.lang.String</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>></code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">grpcPorts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>></code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">healthRoute</a></code> | <code>java.lang.String</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">ports</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>></code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">predictRoute</a></code> | <code>java.lang.String</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">sharedMemorySizeMb</a></code> | <code>java.lang.String</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#image_uri GoogleVertexAiTrainingPipeline#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#args GoogleVertexAiTrainingPipeline#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

##### `deploymentTimeout`<sup>Optional</sup> <a name="deploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```java
public java.lang.String getDeploymentTimeout();
```

- *Type:* java.lang.String

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deployment_timeout GoogleVertexAiTrainingPipeline#deployment_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#env GoogleVertexAiTrainingPipeline#env}

---

##### `grpcPorts`<sup>Optional</sup> <a name="grpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> getGrpcPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#grpc_ports GoogleVertexAiTrainingPipeline#grpc_ports}

---

##### `healthProbe`<sup>Optional</sup> <a name="healthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe getHealthProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_probe GoogleVertexAiTrainingPipeline#health_probe}

---

##### `healthRoute`<sup>Optional</sup> <a name="healthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```java
public java.lang.String getHealthRoute();
```

- *Type:* java.lang.String

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_route GoogleVertexAiTrainingPipeline#health_route}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts> getPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#ports GoogleVertexAiTrainingPipeline#ports}

---

##### `predictRoute`<sup>Optional</sup> <a name="predictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```java
public java.lang.String getPredictRoute();
```

- *Type:* java.lang.String

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predict_route GoogleVertexAiTrainingPipeline#predict_route}

---

##### `sharedMemorySizeMb`<sup>Optional</sup> <a name="sharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```java
public java.lang.String getSharedMemorySizeMb();
```

- *Type:* java.lang.String

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#shared_memory_size_mb GoogleVertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#startup_probe GoogleVertexAiTrainingPipeline#startup_probe}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">value</a></code> | <code>java.lang.String</code> | The value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#name GoogleVertexAiTrainingPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#value GoogleVertexAiTrainingPipeline#value}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.builder()
    .containerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | The number of the port on the container. |

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.builder()
//  .exec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec)
//  .periodSeconds(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec getExec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.builder()
//  .command(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.builder()
    .containerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | The number of the port on the container. |

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.builder()
//  .exec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec)
//  .periodSeconds(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec getExec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec;

GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.builder()
//  .command(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec;

GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec;

GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.builder()
//  .metadata(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#metadata GoogleVertexAiTrainingPipeline#metadata}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parameters GoogleVertexAiTrainingPipeline#parameters}

---

### GoogleVertexAiTrainingPipelineTimeouts <a name="GoogleVertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineTimeouts;

GoogleVertexAiTrainingPipelineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference;

new GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineErrorList <a name="GoogleVertexAiTrainingPipelineErrorList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineErrorList;

new GoogleVertexAiTrainingPipelineErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get"></a>

```java
public GoogleVertexAiTrainingPipelineErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiTrainingPipelineErrorOutputReference <a name="GoogleVertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineErrorOutputReference;

new GoogleVertexAiTrainingPipelineErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">outputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputUriInput`<sup>Optional</sup> <a name="outputUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```java
public java.lang.String getOutputUriInput();
```

- *Type:* java.lang.String

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">testFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">trainingFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">validationFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">testFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">trainingFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">validationFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testFilterInput`<sup>Optional</sup> <a name="testFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```java
public java.lang.String getTestFilterInput();
```

- *Type:* java.lang.String

---

##### `trainingFilterInput`<sup>Optional</sup> <a name="trainingFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```java
public java.lang.String getTrainingFilterInput();
```

- *Type:* java.lang.String

---

##### `validationFilterInput`<sup>Optional</sup> <a name="validationFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```java
public java.lang.String getValidationFilterInput();
```

- *Type:* java.lang.String

---

##### `testFilter`<sup>Required</sup> <a name="testFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```java
public java.lang.String getTestFilter();
```

- *Type:* java.lang.String

---

##### `trainingFilter`<sup>Required</sup> <a name="trainingFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```java
public java.lang.String getTrainingFilter();
```

- *Type:* java.lang.String

---

##### `validationFilter`<sup>Required</sup> <a name="validationFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```java
public java.lang.String getValidationFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">resetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">resetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">resetValidationFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestFraction` <a name="resetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```java
public void resetTestFraction()
```

##### `resetTrainingFraction` <a name="resetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```java
public void resetTrainingFraction()
```

##### `resetValidationFraction` <a name="resetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```java
public void resetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">testFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">trainingFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">validationFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testFractionInput`<sup>Optional</sup> <a name="testFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```java
public java.lang.Number getTestFractionInput();
```

- *Type:* java.lang.Number

---

##### `trainingFractionInput`<sup>Optional</sup> <a name="trainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```java
public java.lang.Number getTrainingFractionInput();
```

- *Type:* java.lang.Number

---

##### `validationFractionInput`<sup>Optional</sup> <a name="validationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```java
public java.lang.Number getValidationFractionInput();
```

- *Type:* java.lang.Number

---

##### `testFraction`<sup>Required</sup> <a name="testFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

---

##### `validationFraction`<sup>Required</sup> <a name="validationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">outputUriPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">outputUriPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputUriPrefixInput`<sup>Optional</sup> <a name="outputUriPrefixInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```java
public java.lang.String getOutputUriPrefixInput();
```

- *Type:* java.lang.String

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```java
public java.lang.String getOutputUriPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">putFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">putFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">putGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">putPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">putStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">putTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">resetAnnotationSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">resetAnnotationsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">resetBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">resetFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">resetFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">resetGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">resetPersistMlUseAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">resetPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">resetSavedQueryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">resetStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">resetTimestampSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```java
public void putBigqueryDestination(GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `putFilterSplit` <a name="putFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```java
public void putFilterSplit(GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `putFractionSplit` <a name="putFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```java
public void putFractionSplit(GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `putGcsDestination` <a name="putGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```java
public void putGcsDestination(GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `putPredefinedSplit` <a name="putPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```java
public void putPredefinedSplit(GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `putStratifiedSplit` <a name="putStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```java
public void putStratifiedSplit(GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `putTimestampSplit` <a name="putTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```java
public void putTimestampSplit(GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `resetAnnotationSchemaUri` <a name="resetAnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```java
public void resetAnnotationSchemaUri()
```

##### `resetAnnotationsFilter` <a name="resetAnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```java
public void resetAnnotationsFilter()
```

##### `resetBigqueryDestination` <a name="resetBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```java
public void resetBigqueryDestination()
```

##### `resetFilterSplit` <a name="resetFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```java
public void resetFilterSplit()
```

##### `resetFractionSplit` <a name="resetFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```java
public void resetFractionSplit()
```

##### `resetGcsDestination` <a name="resetGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```java
public void resetGcsDestination()
```

##### `resetPersistMlUseAssignment` <a name="resetPersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```java
public void resetPersistMlUseAssignment()
```

##### `resetPredefinedSplit` <a name="resetPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```java
public void resetPredefinedSplit()
```

##### `resetSavedQueryId` <a name="resetSavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```java
public void resetSavedQueryId()
```

##### `resetStratifiedSplit` <a name="resetStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```java
public void resetStratifiedSplit()
```

##### `resetTimestampSplit` <a name="resetTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```java
public void resetTimestampSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">filterSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">fractionSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">gcsDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">predefinedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">stratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">timestampSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">annotationSchemaUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">annotationsFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">filterSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">fractionSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">gcsDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">persistMlUseAssignmentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">predefinedSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">savedQueryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">stratifiedSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">timestampSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">annotationSchemaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">annotationsFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">persistMlUseAssignment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">savedQueryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference getBigqueryDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `filterSplit`<sup>Required</sup> <a name="filterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference getFilterSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `fractionSplit`<sup>Required</sup> <a name="fractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference getFractionSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `gcsDestination`<sup>Required</sup> <a name="gcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference getGcsDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `predefinedSplit`<sup>Required</sup> <a name="predefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference getPredefinedSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `stratifiedSplit`<sup>Required</sup> <a name="stratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference getStratifiedSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `timestampSplit`<sup>Required</sup> <a name="timestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference getTimestampSplit();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `annotationSchemaUriInput`<sup>Optional</sup> <a name="annotationSchemaUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```java
public java.lang.String getAnnotationSchemaUriInput();
```

- *Type:* java.lang.String

---

##### `annotationsFilterInput`<sup>Optional</sup> <a name="annotationsFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```java
public java.lang.String getAnnotationsFilterInput();
```

- *Type:* java.lang.String

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination getBigqueryDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `filterSplitInput`<sup>Optional</sup> <a name="filterSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit getFilterSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `fractionSplitInput`<sup>Optional</sup> <a name="fractionSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit getFractionSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `gcsDestinationInput`<sup>Optional</sup> <a name="gcsDestinationInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination getGcsDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `persistMlUseAssignmentInput`<sup>Optional</sup> <a name="persistMlUseAssignmentInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```java
public java.lang.Boolean|IResolvable getPersistMlUseAssignmentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `predefinedSplitInput`<sup>Optional</sup> <a name="predefinedSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit getPredefinedSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `savedQueryIdInput`<sup>Optional</sup> <a name="savedQueryIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```java
public java.lang.String getSavedQueryIdInput();
```

- *Type:* java.lang.String

---

##### `stratifiedSplitInput`<sup>Optional</sup> <a name="stratifiedSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit getStratifiedSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `timestampSplitInput`<sup>Optional</sup> <a name="timestampSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit getTimestampSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `annotationSchemaUri`<sup>Required</sup> <a name="annotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```java
public java.lang.String getAnnotationSchemaUri();
```

- *Type:* java.lang.String

---

##### `annotationsFilter`<sup>Required</sup> <a name="annotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```java
public java.lang.String getAnnotationsFilter();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `persistMlUseAssignment`<sup>Required</sup> <a name="persistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```java
public java.lang.Boolean|IResolvable getPersistMlUseAssignment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `savedQueryId`<sup>Required</sup> <a name="savedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```java
public java.lang.String getSavedQueryId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">resetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">resetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">resetValidationFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestFraction` <a name="resetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```java
public void resetTestFraction()
```

##### `resetTrainingFraction` <a name="resetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```java
public void resetTrainingFraction()
```

##### `resetValidationFraction` <a name="resetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```java
public void resetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">testFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">trainingFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">validationFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `testFractionInput`<sup>Optional</sup> <a name="testFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```java
public java.lang.Number getTestFractionInput();
```

- *Type:* java.lang.Number

---

##### `trainingFractionInput`<sup>Optional</sup> <a name="trainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```java
public java.lang.Number getTrainingFractionInput();
```

- *Type:* java.lang.Number

---

##### `validationFractionInput`<sup>Optional</sup> <a name="validationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```java
public java.lang.Number getValidationFractionInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `testFraction`<sup>Required</sup> <a name="testFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

---

##### `validationFraction`<sup>Required</sup> <a name="validationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference;

new GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">resetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">resetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">resetValidationFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestFraction` <a name="resetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```java
public void resetTestFraction()
```

##### `resetTrainingFraction` <a name="resetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```java
public void resetTrainingFraction()
```

##### `resetValidationFraction` <a name="resetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```java
public void resetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">testFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">trainingFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">validationFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `testFractionInput`<sup>Optional</sup> <a name="testFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```java
public java.lang.Number getTestFractionInput();
```

- *Type:* java.lang.Number

---

##### `trainingFractionInput`<sup>Optional</sup> <a name="trainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```java
public java.lang.Number getTrainingFractionInput();
```

- *Type:* java.lang.Number

---

##### `validationFractionInput`<sup>Optional</sup> <a name="validationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```java
public java.lang.Number getValidationFractionInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `testFraction`<sup>Required</sup> <a name="testFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

---

##### `validationFraction`<sup>Required</sup> <a name="validationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">putExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExec` <a name="putExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```java
public void putExec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `resetExec` <a name="resetExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```java
public void resetExec()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">execInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference getExec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec getExecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">putGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">putHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">resetDeploymentTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">resetGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">resetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">resetHealthRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">resetPredictRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">resetSharedMemorySizeMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

---

##### `putGrpcPorts` <a name="putGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```java
public void putGrpcPorts(IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

---

##### `putHealthProbe` <a name="putHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```java
public void putHealthProbe(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```java
public void putStartupProbe(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDeploymentTimeout` <a name="resetDeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```java
public void resetDeploymentTimeout()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetGrpcPorts` <a name="resetGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```java
public void resetGrpcPorts()
```

##### `resetHealthProbe` <a name="resetHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```java
public void resetHealthProbe()
```

##### `resetHealthRoute` <a name="resetHealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```java
public void resetHealthRoute()
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetPredictRoute` <a name="resetPredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```java
public void resetPredictRoute()
```

##### `resetSharedMemorySizeMb` <a name="resetSharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```java
public void resetSharedMemorySizeMb()
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```java
public void resetStartupProbe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">grpcPorts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">deploymentTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">grpcPortsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">healthProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">healthRouteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">portsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">predictRouteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">sharedMemorySizeMbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">deploymentTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">healthRoute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">predictRoute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">sharedMemorySizeMb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `grpcPorts`<sup>Required</sup> <a name="grpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList getGrpcPorts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `healthProbe`<sup>Required</sup> <a name="healthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference getHealthProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList getPorts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTimeoutInput`<sup>Optional</sup> <a name="deploymentTimeoutInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```java
public java.lang.String getDeploymentTimeoutInput();
```

- *Type:* java.lang.String

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

---

##### `grpcPortsInput`<sup>Optional</sup> <a name="grpcPortsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> getGrpcPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

---

##### `healthProbeInput`<sup>Optional</sup> <a name="healthProbeInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe getHealthProbeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `healthRouteInput`<sup>Optional</sup> <a name="healthRouteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```java
public java.lang.String getHealthRouteInput();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts> getPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

---

##### `predictRouteInput`<sup>Optional</sup> <a name="predictRouteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```java
public java.lang.String getPredictRouteInput();
```

- *Type:* java.lang.String

---

##### `sharedMemorySizeMbInput`<sup>Optional</sup> <a name="sharedMemorySizeMbInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```java
public java.lang.String getSharedMemorySizeMbInput();
```

- *Type:* java.lang.String

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe getStartupProbeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTimeout`<sup>Required</sup> <a name="deploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```java
public java.lang.String getDeploymentTimeout();
```

- *Type:* java.lang.String

---

##### `healthRoute`<sup>Required</sup> <a name="healthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```java
public java.lang.String getHealthRoute();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `predictRoute`<sup>Required</sup> <a name="predictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```java
public java.lang.String getPredictRoute();
```

- *Type:* java.lang.String

---

##### `sharedMemorySizeMb`<sup>Required</sup> <a name="sharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```java
public java.lang.String getSharedMemorySizeMb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">putExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExec` <a name="putExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```java
public void putExec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `resetExec` <a name="resetExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```java
public void resetExec()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">execInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference getExec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec getExecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference;

new GoogleVertexAiTrainingPipelineModelToUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">putExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">resetArtifactUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">resetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">resetExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">resetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```java
public void putContainerSpec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `putExplanationSpec` <a name="putExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```java
public void putExplanationSpec(GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `resetArtifactUri` <a name="resetArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```java
public void resetArtifactUri()
```

##### `resetContainerSpec` <a name="resetContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```java
public void resetContainerSpec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetExplanationSpec` <a name="resetExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```java
public void resetExplanationSpec()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetVersionAliases` <a name="resetVersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```java
public void resetVersionAliases()
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```java
public void resetVersionDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">explanationSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">artifactUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">explanationSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">versionAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">artifactUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">versionAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `explanationSpec`<sup>Required</sup> <a name="explanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference getExplanationSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `artifactUriInput`<sup>Optional</sup> <a name="artifactUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```java
public java.lang.String getArtifactUriInput();
```

- *Type:* java.lang.String

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpec getContainerSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `explanationSpecInput`<sup>Optional</sup> <a name="explanationSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec getExplanationSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionAliasesInput`<sup>Optional</sup> <a name="versionAliasesInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```java
public java.util.List<java.lang.String> getVersionAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```java
public java.lang.String getVersionDescriptionInput();
```

- *Type:* java.lang.String

---

##### `artifactUri`<sup>Required</sup> <a name="artifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```java
public java.lang.String getArtifactUri();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```java
public java.util.List<java.lang.String> getVersionAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiTrainingPipelineModelToUpload getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---


### GoogleVertexAiTrainingPipelineTimeoutsOutputReference <a name="GoogleVertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_training_pipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference;

new GoogleVertexAiTrainingPipelineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiTrainingPipelineTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---



