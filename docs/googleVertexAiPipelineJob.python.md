# `googleVertexAiPipelineJob` Submodule <a name="`googleVertexAiPipelineJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPipelineJob <a name="GoogleVertexAiPipelineJob" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job google_vertex_ai_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  display_name: str = None,
  encryption_spec: GoogleVertexAiPipelineJobEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  pipeline_job_id: str = None,
  pipeline_spec: str = None,
  preflight_validations: bool | IResolvable = None,
  project: str = None,
  psc_interface_config: GoogleVertexAiPipelineJobPscInterfaceConfig = None,
  region: str = None,
  reserved_ip_ranges: typing.List[str] = None,
  runtime_config: GoogleVertexAiPipelineJobRuntimeConfig = None,
  service_account: str = None,
  template_uri: str = None,
  timeouts: GoogleVertexAiPipelineJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.network">network</a></code> | <code>str</code> | The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.pipelineJobId">pipeline_job_id</a></code> | <code>str</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.pipelineSpec">pipeline_spec</a></code> | <code>str</code> | The spec of the pipeline. This is a JSON object that describes the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.preflightValidations">preflight_validations</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the pipeline job. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.templateUri">template_uri</a></code> | <code>str</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#deletion_policy GoogleVertexAiPipelineJob#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#display_name GoogleVertexAiPipelineJob#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#encryption_spec GoogleVertexAiPipelineJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize PipelineJob.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#labels GoogleVertexAiPipelineJob#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.network"></a>

- *Type:* str

The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network GoogleVertexAiPipelineJob#network}

---

##### `pipeline_job_id`<sup>Optional</sup> <a name="pipeline_job_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.pipelineJobId"></a>

- *Type:* str

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated.
This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_job_id GoogleVertexAiPipelineJob#pipeline_job_id}

---

##### `pipeline_spec`<sup>Optional</sup> <a name="pipeline_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.pipelineSpec"></a>

- *Type:* str

The spec of the pipeline. This is a JSON object that describes the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_spec GoogleVertexAiPipelineJob#pipeline_spec}

---

##### `preflight_validations`<sup>Optional</sup> <a name="preflight_validations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.preflightValidations"></a>

- *Type:* bool | cdktn.IResolvable

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#preflight_validations GoogleVertexAiPipelineJob#preflight_validations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}.

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.pscInterfaceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#psc_interface_config GoogleVertexAiPipelineJob#psc_interface_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.region"></a>

- *Type:* str

The region of the pipeline job. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#region GoogleVertexAiPipelineJob#region}

---

##### `reserved_ip_ranges`<sup>Optional</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.reservedIpRanges"></a>

- *Type:* typing.List[str]

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#reserved_ip_ranges GoogleVertexAiPipelineJob#reserved_ip_ranges}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#runtime_config GoogleVertexAiPipelineJob#runtime_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#service_account GoogleVertexAiPipelineJob#service_account}

---

##### `template_uri`<sup>Optional</sup> <a name="template_uri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.templateUri"></a>

- *Type:* str

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#template_uri GoogleVertexAiPipelineJob#template_uri}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#timeouts GoogleVertexAiPipelineJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig">put_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId">reset_pipeline_job_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec">reset_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations">reset_preflight_validations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig">reset_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges">reset_reserved_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig">reset_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri">reset_template_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#kms_key_name GoogleVertexAiPipelineJob#kms_key_name}

---

##### `put_psc_interface_config` <a name="put_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig"></a>

```python
def put_psc_interface_config(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
) -> None
```

###### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig.parameter.dnsPeeringConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#dns_peering_configs GoogleVertexAiPipelineJob#dns_peering_configs}

---

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig.parameter.networkAttachment"></a>

- *Type:* str

The name of the Compute Engine network attachment to attach to the resource within the region and user project.

To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network_attachment GoogleVertexAiPipelineJob#network_attachment}

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig"></a>

```python
def put_runtime_config(
  gcs_output_directory: str,
  default_runtime: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime = None,
  failure_policy: str = None,
  input_artifacts: IResolvable | typing.List[GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts] = None,
  parameter_values: typing.Mapping[str] = None
) -> None
```

###### `gcs_output_directory`<sup>Required</sup> <a name="gcs_output_directory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.gcsOutputDirectory"></a>

- *Type:* str

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#gcs_output_directory GoogleVertexAiPipelineJob#gcs_output_directory}

---

###### `default_runtime`<sup>Optional</sup> <a name="default_runtime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.defaultRuntime"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

default_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#default_runtime GoogleVertexAiPipelineJob#default_runtime}

---

###### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.failurePolicy"></a>

- *Type:* str

Represents the failure policy of a pipeline.

Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#failure_policy GoogleVertexAiPipelineJob#failure_policy}

---

###### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.inputArtifacts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]

input_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#input_artifacts GoogleVertexAiPipelineJob#input_artifacts}

---

###### `parameter_values`<sup>Optional</sup> <a name="parameter_values" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.parameterValues"></a>

- *Type:* typing.Mapping[str]

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#parameter_values GoogleVertexAiPipelineJob#parameter_values}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_pipeline_job_id` <a name="reset_pipeline_job_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId"></a>

```python
def reset_pipeline_job_id() -> None
```

##### `reset_pipeline_spec` <a name="reset_pipeline_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec"></a>

```python
def reset_pipeline_spec() -> None
```

##### `reset_preflight_validations` <a name="reset_preflight_validations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations"></a>

```python
def reset_preflight_validations() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_interface_config` <a name="reset_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig"></a>

```python
def reset_psc_interface_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reserved_ip_ranges` <a name="reset_reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges"></a>

```python
def reset_reserved_ip_ranges() -> None
```

##### `reset_runtime_config` <a name="reset_runtime_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig"></a>

```python
def reset_runtime_config() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_template_uri` <a name="reset_template_uri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri"></a>

```python
def reset_template_uri() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiPipelineJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiPipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail">job_detail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName">schedule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput">pipeline_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput">pipeline_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput">preflight_validations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput">psc_interface_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput">reserved_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput">runtime_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput">template_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId">pipeline_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec">pipeline_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations">preflight_validations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri">template_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiPipelineJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error"></a>

```python
error: GoogleVertexAiPipelineJobErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a>

---

##### `job_detail`<sup>Required</sup> <a name="job_detail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail"></a>

```python
job_detail: GoogleVertexAiPipelineJobJobDetailList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psc_interface_config`<sup>Required</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig"></a>

```python
runtime_config: GoogleVertexAiPipelineJobRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a>

---

##### `schedule_name`<sup>Required</sup> <a name="schedule_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName"></a>

```python
schedule_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `template_metadata`<sup>Required</sup> <a name="template_metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata"></a>

```python
template_metadata: GoogleVertexAiPipelineJobTemplateMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts"></a>

```python
timeouts: GoogleVertexAiPipelineJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `pipeline_job_id_input`<sup>Optional</sup> <a name="pipeline_job_id_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput"></a>

```python
pipeline_job_id_input: str
```

- *Type:* str

---

##### `pipeline_spec_input`<sup>Optional</sup> <a name="pipeline_spec_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput"></a>

```python
pipeline_spec_input: str
```

- *Type:* str

---

##### `preflight_validations_input`<sup>Optional</sup> <a name="preflight_validations_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput"></a>

```python
preflight_validations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_interface_config_input`<sup>Optional</sup> <a name="psc_interface_config_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput"></a>

```python
psc_interface_config_input: GoogleVertexAiPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reserved_ip_ranges_input`<sup>Optional</sup> <a name="reserved_ip_ranges_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput"></a>

```python
reserved_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput"></a>

```python
runtime_config_input: GoogleVertexAiPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `template_uri_input`<sup>Optional</sup> <a name="template_uri_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput"></a>

```python
template_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiPipelineJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `pipeline_job_id`<sup>Required</sup> <a name="pipeline_job_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId"></a>

```python
pipeline_job_id: str
```

- *Type:* str

---

##### `pipeline_spec`<sup>Required</sup> <a name="pipeline_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec"></a>

```python
pipeline_spec: str
```

- *Type:* str

---

##### `preflight_validations`<sup>Required</sup> <a name="preflight_validations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations"></a>

```python
preflight_validations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `reserved_ip_ranges`<sup>Required</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges"></a>

```python
reserved_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `template_uri`<sup>Required</sup> <a name="template_uri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri"></a>

```python
template_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPipelineJobConfig <a name="GoogleVertexAiPipelineJobConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  display_name: str = None,
  encryption_spec: GoogleVertexAiPipelineJobEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  pipeline_job_id: str = None,
  pipeline_spec: str = None,
  preflight_validations: bool | IResolvable = None,
  project: str = None,
  psc_interface_config: GoogleVertexAiPipelineJobPscInterfaceConfig = None,
  region: str = None,
  reserved_ip_ranges: typing.List[str] = None,
  runtime_config: GoogleVertexAiPipelineJobRuntimeConfig = None,
  service_account: str = None,
  template_uri: str = None,
  timeouts: GoogleVertexAiPipelineJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network">network</a></code> | <code>str</code> | The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId">pipeline_job_id</a></code> | <code>str</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec">pipeline_spec</a></code> | <code>str</code> | The spec of the pipeline. This is a JSON object that describes the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations">preflight_validations</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region">region</a></code> | <code>str</code> | The region of the pipeline job. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri">template_uri</a></code> | <code>str</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#deletion_policy GoogleVertexAiPipelineJob#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#display_name GoogleVertexAiPipelineJob#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#encryption_spec GoogleVertexAiPipelineJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize PipelineJob.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#labels GoogleVertexAiPipelineJob#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network GoogleVertexAiPipelineJob#network}

---

##### `pipeline_job_id`<sup>Optional</sup> <a name="pipeline_job_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId"></a>

```python
pipeline_job_id: str
```

- *Type:* str

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated.
This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_job_id GoogleVertexAiPipelineJob#pipeline_job_id}

---

##### `pipeline_spec`<sup>Optional</sup> <a name="pipeline_spec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec"></a>

```python
pipeline_spec: str
```

- *Type:* str

The spec of the pipeline. This is a JSON object that describes the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_spec GoogleVertexAiPipelineJob#pipeline_spec}

---

##### `preflight_validations`<sup>Optional</sup> <a name="preflight_validations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations"></a>

```python
preflight_validations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#preflight_validations GoogleVertexAiPipelineJob#preflight_validations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}.

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#psc_interface_config GoogleVertexAiPipelineJob#psc_interface_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the pipeline job. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#region GoogleVertexAiPipelineJob#region}

---

##### `reserved_ip_ranges`<sup>Optional</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges"></a>

```python
reserved_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#reserved_ip_ranges GoogleVertexAiPipelineJob#reserved_ip_ranges}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig"></a>

```python
runtime_config: GoogleVertexAiPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#runtime_config GoogleVertexAiPipelineJob#runtime_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#service_account GoogleVertexAiPipelineJob#service_account}

---

##### `template_uri`<sup>Optional</sup> <a name="template_uri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri"></a>

```python
template_uri: str
```

- *Type:* str

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#template_uri GoogleVertexAiPipelineJob#template_uri}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiPipelineJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#timeouts GoogleVertexAiPipelineJob#timeouts}

---

### GoogleVertexAiPipelineJobEncryptionSpec <a name="GoogleVertexAiPipelineJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#kms_key_name GoogleVertexAiPipelineJob#kms_key_name}

---

### GoogleVertexAiPipelineJobError <a name="GoogleVertexAiPipelineJobError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError()
```


### GoogleVertexAiPipelineJobJobDetail <a name="GoogleVertexAiPipelineJobJobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail()
```


### GoogleVertexAiPipelineJobJobDetailPipelineContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext()
```


### GoogleVertexAiPipelineJobJobDetailPipelineRunContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext()
```


### GoogleVertexAiPipelineJobJobDetailTaskDetails <a name="GoogleVertexAiPipelineJobJobDetailTaskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails()
```


### GoogleVertexAiPipelineJobJobDetailTaskDetailsError <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError()
```


### GoogleVertexAiPipelineJobPscInterfaceConfig <a name="GoogleVertexAiPipelineJobPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The name of the Compute Engine network attachment to attach to the resource within the region and user project. |

---

##### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: IResolvable | typing.List[GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#dns_peering_configs GoogleVertexAiPipelineJob#dns_peering_configs}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The name of the Compute Engine network attachment to attach to the resource within the region and user project.

To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network_attachment GoogleVertexAiPipelineJob#network_attachment}

---

### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs(
  domain: str,
  target_network: str,
  target_project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>str</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">target_network</a></code> | <code>str</code> | The VPC network name in the targetProject where the DNS zone specified by domain is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">target_project</a></code> | <code>str</code> | The project ID hosting the Cloud DNS managed zone that contains the above domain. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```python
domain: str
```

- *Type:* str

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#domain GoogleVertexAiPipelineJob#domain}

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

The VPC network name in the targetProject where the DNS zone specified by domain is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_network GoogleVertexAiPipelineJob#target_network}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

The project ID hosting the Cloud DNS managed zone that contains the above domain.

The Vertex AI Service Agent must be granted the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_project GoogleVertexAiPipelineJob#target_project}

---

### GoogleVertexAiPipelineJobRuntimeConfig <a name="GoogleVertexAiPipelineJobRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig(
  gcs_output_directory: str,
  default_runtime: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime = None,
  failure_policy: str = None,
  input_artifacts: IResolvable | typing.List[GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts] = None,
  parameter_values: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory">gcs_output_directory</a></code> | <code>str</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime">default_runtime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | default_runtime block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy">failure_policy</a></code> | <code>str</code> | Represents the failure policy of a pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts">input_artifacts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]</code> | input_artifacts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues">parameter_values</a></code> | <code>typing.Mapping[str]</code> | The runtime parameters of the PipelineJob. |

---

##### `gcs_output_directory`<sup>Required</sup> <a name="gcs_output_directory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```python
gcs_output_directory: str
```

- *Type:* str

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#gcs_output_directory GoogleVertexAiPipelineJob#gcs_output_directory}

---

##### `default_runtime`<sup>Optional</sup> <a name="default_runtime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime"></a>

```python
default_runtime: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

default_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#default_runtime GoogleVertexAiPipelineJob#default_runtime}

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy"></a>

```python
failure_policy: str
```

- *Type:* str

Represents the failure policy of a pipeline.

Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#failure_policy GoogleVertexAiPipelineJob#failure_policy}

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts"></a>

```python
input_artifacts: IResolvable | typing.List[GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]

input_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#input_artifacts GoogleVertexAiPipelineJob#input_artifacts}

---

##### `parameter_values`<sup>Optional</sup> <a name="parameter_values" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues"></a>

```python
parameter_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#parameter_values GoogleVertexAiPipelineJob#parameter_values}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime(
  persistent_resource_runtime_detail: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail">persistent_resource_runtime_detail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | persistent_resource_runtime_detail block. |

---

##### `persistent_resource_runtime_detail`<sup>Optional</sup> <a name="persistent_resource_runtime_detail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail"></a>

```python
persistent_resource_runtime_detail: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

persistent_resource_runtime_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_runtime_detail GoogleVertexAiPipelineJob#persistent_resource_runtime_detail}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail(
  persistent_resource_name: str = None,
  task_resource_unavailable_timeout_behavior: str = None,
  task_resource_unavailable_wait_time_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName">persistent_resource_name</a></code> | <code>str</code> | PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior">task_resource_unavailable_timeout_behavior</a></code> | <code>str</code> | Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs">task_resource_unavailable_wait_time_ms</a></code> | <code>str</code> | The maxWaitTime for the task if the persistent resource is unavailable. |

---

##### `persistent_resource_name`<sup>Optional</sup> <a name="persistent_resource_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName"></a>

```python
persistent_resource_name: str
```

- *Type:* str

PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_name GoogleVertexAiPipelineJob#persistent_resource_name}

---

##### `task_resource_unavailable_timeout_behavior`<sup>Optional</sup> <a name="task_resource_unavailable_timeout_behavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior"></a>

```python
task_resource_unavailable_timeout_behavior: str
```

- *Type:* str

Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource.

Possible values are: 'TASK_RESOURCE_UNAVAILABLE_TIMEOUT_BEHAVIOR_UNSPECIFIED', 'FAIL', 'FALL_BACK_TO_ON_DEMAND'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_timeout_behavior GoogleVertexAiPipelineJob#task_resource_unavailable_timeout_behavior}

---

##### `task_resource_unavailable_wait_time_ms`<sup>Optional</sup> <a name="task_resource_unavailable_wait_time_ms" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs"></a>

```python
task_resource_unavailable_wait_time_ms: str
```

- *Type:* str

The maxWaitTime for the task if the persistent resource is unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_wait_time_ms GoogleVertexAiPipelineJob#task_resource_unavailable_wait_time_ms}

---

### GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts(
  artifact_id: str,
  artifact_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId">artifact_id</a></code> | <code>str</code> | Artifact resource id from MLMD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey">artifact_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}. |

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

Artifact resource id from MLMD.

Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_id GoogleVertexAiPipelineJob#artifact_id}

---

##### `artifact_key`<sup>Required</sup> <a name="artifact_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey"></a>

```python
artifact_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}.

---

### GoogleVertexAiPipelineJobTemplateMetadata <a name="GoogleVertexAiPipelineJobTemplateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata()
```


### GoogleVertexAiPipelineJobTimeouts <a name="GoogleVertexAiPipelineJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPipelineJobEncryptionSpecOutputReference <a name="GoogleVertexAiPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---


### GoogleVertexAiPipelineJobErrorList <a name="GoogleVertexAiPipelineJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobErrorOutputReference <a name="GoogleVertexAiPipelineJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a>

---


### GoogleVertexAiPipelineJobJobDetailList <a name="GoogleVertexAiPipelineJobJobDetailList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobJobDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobJobDetailOutputReference <a name="GoogleVertexAiPipelineJobJobDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext">pipeline_context</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext">pipeline_run_context</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails">task_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_context`<sup>Required</sup> <a name="pipeline_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext"></a>

```python
pipeline_context: GoogleVertexAiPipelineJobJobDetailPipelineContextList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a>

---

##### `pipeline_run_context`<sup>Required</sup> <a name="pipeline_run_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext"></a>

```python
pipeline_run_context: GoogleVertexAiPipelineJobJobDetailPipelineRunContextList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a>

---

##### `task_details`<sup>Required</sup> <a name="task_details" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails"></a>

```python
task_details: GoogleVertexAiPipelineJobJobDetailTaskDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobJobDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts">parent_contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle">schema_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion">schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_contexts`<sup>Required</sup> <a name="parent_contexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts"></a>

```python
parent_contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_title`<sup>Required</sup> <a name="schema_title" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle"></a>

```python
schema_title: str
```

- *Type:* str

---

##### `schema_version`<sup>Required</sup> <a name="schema_version" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion"></a>

```python
schema_version: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobJobDetailPipelineContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts">parent_contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle">schema_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion">schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_contexts`<sup>Required</sup> <a name="parent_contexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts"></a>

```python
parent_contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_title`<sup>Required</sup> <a name="schema_title" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle"></a>

```python
schema_title: str
```

- *Type:* str

---

##### `schema_version`<sup>Required</sup> <a name="schema_version" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion"></a>

```python
schema_version: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobJobDetailPipelineRunContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobJobDetailTaskDetailsError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId">parent_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId">task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName">task_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName">task_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error"></a>

```python
error: GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a>

---

##### `parent_task_id`<sup>Required</sup> <a name="parent_task_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId"></a>

```python
parent_task_id: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

---

##### `task_unique_name`<sup>Required</sup> <a name="task_unique_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName"></a>

```python
task_unique_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobJobDetailTaskDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">put_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">reset_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_configs` <a name="put_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```python
def put_dns_peering_configs(
  value: IResolvable | typing.List[GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `reset_dns_peering_configs` <a name="reset_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```python
def reset_dns_peering_configs() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dns_peering_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_configs`<sup>Required</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dns_peering_configs_input`<sup>Optional</sup> <a name="dns_peering_configs_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```python
dns_peering_configs_input: IResolvable | typing.List[GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail">put_persistent_resource_runtime_detail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail">reset_persistent_resource_runtime_detail</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_persistent_resource_runtime_detail` <a name="put_persistent_resource_runtime_detail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail"></a>

```python
def put_persistent_resource_runtime_detail(
  persistent_resource_name: str = None,
  task_resource_unavailable_timeout_behavior: str = None,
  task_resource_unavailable_wait_time_ms: str = None
) -> None
```

###### `persistent_resource_name`<sup>Optional</sup> <a name="persistent_resource_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail.parameter.persistentResourceName"></a>

- *Type:* str

PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_name GoogleVertexAiPipelineJob#persistent_resource_name}

---

###### `task_resource_unavailable_timeout_behavior`<sup>Optional</sup> <a name="task_resource_unavailable_timeout_behavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail.parameter.taskResourceUnavailableTimeoutBehavior"></a>

- *Type:* str

Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource.

Possible values are: 'TASK_RESOURCE_UNAVAILABLE_TIMEOUT_BEHAVIOR_UNSPECIFIED', 'FAIL', 'FALL_BACK_TO_ON_DEMAND'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_timeout_behavior GoogleVertexAiPipelineJob#task_resource_unavailable_timeout_behavior}

---

###### `task_resource_unavailable_wait_time_ms`<sup>Optional</sup> <a name="task_resource_unavailable_wait_time_ms" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail.parameter.taskResourceUnavailableWaitTimeMs"></a>

- *Type:* str

The maxWaitTime for the task if the persistent resource is unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_wait_time_ms GoogleVertexAiPipelineJob#task_resource_unavailable_wait_time_ms}

---

##### `reset_persistent_resource_runtime_detail` <a name="reset_persistent_resource_runtime_detail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail"></a>

```python
def reset_persistent_resource_runtime_detail() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail">persistent_resource_runtime_detail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput">persistent_resource_runtime_detail_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persistent_resource_runtime_detail`<sup>Required</sup> <a name="persistent_resource_runtime_detail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail"></a>

```python
persistent_resource_runtime_detail: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a>

---

##### `persistent_resource_runtime_detail_input`<sup>Optional</sup> <a name="persistent_resource_runtime_detail_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput"></a>

```python
persistent_resource_runtime_detail_input: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName">reset_persistent_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior">reset_task_resource_unavailable_timeout_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs">reset_task_resource_unavailable_wait_time_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_persistent_resource_name` <a name="reset_persistent_resource_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName"></a>

```python
def reset_persistent_resource_name() -> None
```

##### `reset_task_resource_unavailable_timeout_behavior` <a name="reset_task_resource_unavailable_timeout_behavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior"></a>

```python
def reset_task_resource_unavailable_timeout_behavior() -> None
```

##### `reset_task_resource_unavailable_wait_time_ms` <a name="reset_task_resource_unavailable_wait_time_ms" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs"></a>

```python
def reset_task_resource_unavailable_wait_time_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput">persistent_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput">task_resource_unavailable_timeout_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput">task_resource_unavailable_wait_time_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName">persistent_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior">task_resource_unavailable_timeout_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs">task_resource_unavailable_wait_time_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persistent_resource_name_input`<sup>Optional</sup> <a name="persistent_resource_name_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput"></a>

```python
persistent_resource_name_input: str
```

- *Type:* str

---

##### `task_resource_unavailable_timeout_behavior_input`<sup>Optional</sup> <a name="task_resource_unavailable_timeout_behavior_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput"></a>

```python
task_resource_unavailable_timeout_behavior_input: str
```

- *Type:* str

---

##### `task_resource_unavailable_wait_time_ms_input`<sup>Optional</sup> <a name="task_resource_unavailable_wait_time_ms_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput"></a>

```python
task_resource_unavailable_wait_time_ms_input: str
```

- *Type:* str

---

##### `persistent_resource_name`<sup>Required</sup> <a name="persistent_resource_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName"></a>

```python
persistent_resource_name: str
```

- *Type:* str

---

##### `task_resource_unavailable_timeout_behavior`<sup>Required</sup> <a name="task_resource_unavailable_timeout_behavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior"></a>

```python
task_resource_unavailable_timeout_behavior: str
```

- *Type:* str

---

##### `task_resource_unavailable_wait_time_ms`<sup>Required</sup> <a name="task_resource_unavailable_wait_time_ms" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs"></a>

```python
task_resource_unavailable_wait_time_ms: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput">artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput">artifact_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey">artifact_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_id_input`<sup>Optional</sup> <a name="artifact_id_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput"></a>

```python
artifact_id_input: str
```

- *Type:* str

---

##### `artifact_key_input`<sup>Optional</sup> <a name="artifact_key_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput"></a>

```python
artifact_key_input: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `artifact_key`<sup>Required</sup> <a name="artifact_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey"></a>

```python
artifact_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime">put_default_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts">put_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime">reset_default_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">reset_failure_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts">reset_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues">reset_parameter_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_runtime` <a name="put_default_runtime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime"></a>

```python
def put_default_runtime(
  persistent_resource_runtime_detail: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail = None
) -> None
```

###### `persistent_resource_runtime_detail`<sup>Optional</sup> <a name="persistent_resource_runtime_detail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime.parameter.persistentResourceRuntimeDetail"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

persistent_resource_runtime_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_runtime_detail GoogleVertexAiPipelineJob#persistent_resource_runtime_detail}

---

##### `put_input_artifacts` <a name="put_input_artifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts"></a>

```python
def put_input_artifacts(
  value: IResolvable | typing.List[GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]

---

##### `reset_default_runtime` <a name="reset_default_runtime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime"></a>

```python
def reset_default_runtime() -> None
```

##### `reset_failure_policy` <a name="reset_failure_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```python
def reset_failure_policy() -> None
```

##### `reset_input_artifacts` <a name="reset_input_artifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts"></a>

```python
def reset_input_artifacts() -> None
```

##### `reset_parameter_values` <a name="reset_parameter_values" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```python
def reset_parameter_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime">default_runtime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput">default_runtime_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">failure_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">gcs_output_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput">input_artifacts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">parameter_values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy">failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">gcs_output_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues">parameter_values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_runtime`<sup>Required</sup> <a name="default_runtime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime"></a>

```python
default_runtime: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a>

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a>

---

##### `default_runtime_input`<sup>Optional</sup> <a name="default_runtime_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput"></a>

```python
default_runtime_input: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `failure_policy_input`<sup>Optional</sup> <a name="failure_policy_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```python
failure_policy_input: str
```

- *Type:* str

---

##### `gcs_output_directory_input`<sup>Optional</sup> <a name="gcs_output_directory_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```python
gcs_output_directory_input: str
```

- *Type:* str

---

##### `input_artifacts_input`<sup>Optional</sup> <a name="input_artifacts_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput"></a>

```python
input_artifacts_input: IResolvable | typing.List[GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>]

---

##### `parameter_values_input`<sup>Optional</sup> <a name="parameter_values_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```python
parameter_values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```python
failure_policy: str
```

- *Type:* str

---

##### `gcs_output_directory`<sup>Required</sup> <a name="gcs_output_directory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```python
gcs_output_directory: str
```

- *Type:* str

---

##### `parameter_values`<sup>Required</sup> <a name="parameter_values" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```python
parameter_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---


### GoogleVertexAiPipelineJobTemplateMetadataList <a name="GoogleVertexAiPipelineJobTemplateMetadataList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiPipelineJobTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiPipelineJobTemplateMetadataOutputReference <a name="GoogleVertexAiPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiPipelineJobTemplateMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a>

---


### GoogleVertexAiPipelineJobTimeoutsOutputReference <a name="GoogleVertexAiPipelineJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_pipeline_job

googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiPipelineJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---



