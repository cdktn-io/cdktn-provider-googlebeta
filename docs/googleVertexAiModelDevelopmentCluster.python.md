# `googleVertexAiModelDevelopmentCluster` Submodule <a name="`googleVertexAiModelDevelopmentCluster` Submodule" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiModelDevelopmentCluster <a name="GoogleVertexAiModelDevelopmentCluster" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster google_vertex_ai_model_development_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  model_development_cluster_id: str,
  node_pools: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterNodePools],
  orchestrator_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lustre_export_config: GoogleVertexAiModelDevelopmentClusterLustreExportConfig = None,
  network: GoogleVertexAiModelDevelopmentClusterNetwork = None,
  project: str = None,
  region: str = None,
  runtime_spec: GoogleVertexAiModelDevelopmentClusterRuntimeSpec = None,
  timeouts: GoogleVertexAiModelDevelopmentClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.modelDevelopmentClusterId">model_development_cluster_id</a></code> | <code>str</code> | The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.nodePools">node_pools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]</code> | node_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.orchestratorSpec">orchestrator_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | orchestrator_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the ModelDevelopmentCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lustreExportConfig">lustre_export_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | lustre_export_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the ModelDevelopmentCluster. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.runtimeSpec">runtime_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `model_development_cluster_id`<sup>Required</sup> <a name="model_development_cluster_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.modelDevelopmentClusterId"></a>

- *Type:* str

The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name.

This value should be 1-10 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,8%7D%5Ba-z0-9%5D)?$/'. When using 'slurm_spec',
hyphens are not allowed ('/^[a-z][a-z0-9]{0,9}$/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#model_development_cluster_id GoogleVertexAiModelDevelopmentCluster#model_development_cluster_id}

---

##### `node_pools`<sup>Required</sup> <a name="node_pools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.nodePools"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]

node_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pools GoogleVertexAiModelDevelopmentCluster#node_pools}

---

##### `orchestrator_spec`<sup>Required</sup> <a name="orchestrator_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.orchestratorSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

orchestrator_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#orchestrator_spec GoogleVertexAiModelDevelopmentCluster#orchestrator_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#deletion_policy GoogleVertexAiModelDevelopmentCluster#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the ModelDevelopmentCluster.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#display_name GoogleVertexAiModelDevelopmentCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `lustre_export_config`<sup>Optional</sup> <a name="lustre_export_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lustreExportConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

lustre_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustre_export_config GoogleVertexAiModelDevelopmentCluster#lustre_export_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.region"></a>

- *Type:* str

The region of the ModelDevelopmentCluster. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#region GoogleVertexAiModelDevelopmentCluster#region}

---

##### `runtime_spec`<sup>Optional</sup> <a name="runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.runtimeSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#runtime_spec GoogleVertexAiModelDevelopmentCluster#runtime_spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#timeouts GoogleVertexAiModelDevelopmentCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig">put_lustre_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools">put_node_pools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec">put_orchestrator_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec">put_runtime_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLustreExportConfig">reset_lustre_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRuntimeSpec">reset_runtime_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lustre_export_config` <a name="put_lustre_export_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig"></a>

```python
def put_lustre_export_config(
  destination_bucket: str,
  days_of_week: typing.List[str] = None,
  lustres: typing.List[str] = None,
  start_time: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime = None
) -> None
```

###### `destination_bucket`<sup>Required</sup> <a name="destination_bucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig.parameter.destinationBucket"></a>

- *Type:* str

The Cloud Storage bucket that backups are written to, without the "gs://" scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#destination_bucket GoogleVertexAiModelDevelopmentCluster#destination_bucket}

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED.

If empty, a backup runs every day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#days_of_week GoogleVertexAiModelDevelopmentCluster#days_of_week}

---

###### `lustres`<sup>Optional</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig.parameter.lustres"></a>

- *Type:* typing.List[str]

The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}".

Every entry
must be attached to one of the cluster's node pools, and no entry may
repeat. If empty, every attached instance is backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig.parameter.startTime"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#start_time GoogleVertexAiModelDevelopmentCluster#start_time}

---

##### `put_network` <a name="put_network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork"></a>

```python
def put_network(
  network: str,
  subnetwork: str = None
) -> None
```

###### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork.parameter.network"></a>

- *Type:* str

The name of the VPC network where to create the cluster. The 'default' network is used if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork in the above network to create the cluster.

If not specified:

* for auto mode VPC, the subnet in corresponding region is auto-selected;
* for custom mode VPC, a new subnet will be automatically created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#subnetwork GoogleVertexAiModelDevelopmentCluster#subnetwork}

---

##### `put_node_pools` <a name="put_node_pools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools"></a>

```python
def put_node_pools(
  value: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterNodePools]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]

---

##### `put_orchestrator_spec` <a name="put_orchestrator_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec"></a>

```python
def put_orchestrator_spec(
  slurm_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec = None
) -> None
```

###### `slurm_spec`<sup>Optional</sup> <a name="slurm_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec.parameter.slurmSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

slurm_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#slurm_spec GoogleVertexAiModelDevelopmentCluster#slurm_spec}

---

##### `put_runtime_spec` <a name="put_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec"></a>

```python
def put_runtime_spec(
  service_account: str = None
) -> None
```

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec.parameter.serviceAccount"></a>

- *Type:* str

The default service account used by the cluster when running any workloads on it.

If not specified, the default compute engine service account will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#service_account GoogleVertexAiModelDevelopmentCluster#service_account}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lustre_export_config` <a name="reset_lustre_export_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLustreExportConfig"></a>

```python
def reset_lustre_export_config() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_runtime_spec` <a name="reset_runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRuntimeSpec"></a>

```python
def reset_runtime_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiModelDevelopmentCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiModelDevelopmentCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiModelDevelopmentCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterEvents">cluster_events</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList">GoogleVertexAiModelDevelopmentClusterClusterEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterStatus">cluster_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfig">lustre_export_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference">GoogleVertexAiModelDevelopmentClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePools">node_pools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList">GoogleVertexAiModelDevelopmentClusterNodePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpec">orchestrator_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList">GoogleVertexAiModelDevelopmentClusterRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpec">runtime_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference">GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference">GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfigInput">lustre_export_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterIdInput">model_development_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.networkInput">network_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePoolsInput">node_pools_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpecInput">orchestrator_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpecInput">runtime_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterId">model_development_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_events`<sup>Required</sup> <a name="cluster_events" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterEvents"></a>

```python
cluster_events: GoogleVertexAiModelDevelopmentClusterClusterEventsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList">GoogleVertexAiModelDevelopmentClusterClusterEventsList</a>

---

##### `cluster_status`<sup>Required</sup> <a name="cluster_status" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterStatus"></a>

```python
cluster_status: GoogleVertexAiModelDevelopmentClusterClusterStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `lustre_export_config`<sup>Required</sup> <a name="lustre_export_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfig"></a>

```python
lustre_export_config: GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.network"></a>

```python
network: GoogleVertexAiModelDevelopmentClusterNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference">GoogleVertexAiModelDevelopmentClusterNetworkOutputReference</a>

---

##### `node_pools`<sup>Required</sup> <a name="node_pools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePools"></a>

```python
node_pools: GoogleVertexAiModelDevelopmentClusterNodePoolsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList">GoogleVertexAiModelDevelopmentClusterNodePoolsList</a>

---

##### `orchestrator_spec`<sup>Required</sup> <a name="orchestrator_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpec"></a>

```python
orchestrator_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtime"></a>

```python
runtime: GoogleVertexAiModelDevelopmentClusterRuntimeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList">GoogleVertexAiModelDevelopmentClusterRuntimeList</a>

---

##### `runtime_spec`<sup>Required</sup> <a name="runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpec"></a>

```python
runtime_spec: GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference">GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeouts"></a>

```python
timeouts: GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference">GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lustre_export_config_input`<sup>Optional</sup> <a name="lustre_export_config_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfigInput"></a>

```python
lustre_export_config_input: GoogleVertexAiModelDevelopmentClusterLustreExportConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---

##### `model_development_cluster_id_input`<sup>Optional</sup> <a name="model_development_cluster_id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterIdInput"></a>

```python
model_development_cluster_id_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.networkInput"></a>

```python
network_input: GoogleVertexAiModelDevelopmentClusterNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---

##### `node_pools_input`<sup>Optional</sup> <a name="node_pools_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePoolsInput"></a>

```python
node_pools_input: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterNodePools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]

---

##### `orchestrator_spec_input`<sup>Optional</sup> <a name="orchestrator_spec_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpecInput"></a>

```python
orchestrator_spec_input: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `runtime_spec_input`<sup>Optional</sup> <a name="runtime_spec_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpecInput"></a>

```python
runtime_spec_input: GoogleVertexAiModelDevelopmentClusterRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiModelDevelopmentClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_development_cluster_id`<sup>Required</sup> <a name="model_development_cluster_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterId"></a>

```python
model_development_cluster_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiModelDevelopmentClusterClusterEvents <a name="GoogleVertexAiModelDevelopmentClusterClusterEvents" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents()
```


### GoogleVertexAiModelDevelopmentClusterClusterStatus <a name="GoogleVertexAiModelDevelopmentClusterClusterStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus()
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusError <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusError" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError()
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus()
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost()
```


### GoogleVertexAiModelDevelopmentClusterConfig <a name="GoogleVertexAiModelDevelopmentClusterConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  model_development_cluster_id: str,
  node_pools: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterNodePools],
  orchestrator_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lustre_export_config: GoogleVertexAiModelDevelopmentClusterLustreExportConfig = None,
  network: GoogleVertexAiModelDevelopmentClusterNetwork = None,
  project: str = None,
  region: str = None,
  runtime_spec: GoogleVertexAiModelDevelopmentClusterRuntimeSpec = None,
  timeouts: GoogleVertexAiModelDevelopmentClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.modelDevelopmentClusterId">model_development_cluster_id</a></code> | <code>str</code> | The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.nodePools">node_pools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]</code> | node_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.orchestratorSpec">orchestrator_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | orchestrator_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the ModelDevelopmentCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lustreExportConfig">lustre_export_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | lustre_export_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.region">region</a></code> | <code>str</code> | The region of the ModelDevelopmentCluster. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.runtimeSpec">runtime_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `model_development_cluster_id`<sup>Required</sup> <a name="model_development_cluster_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.modelDevelopmentClusterId"></a>

```python
model_development_cluster_id: str
```

- *Type:* str

The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name.

This value should be 1-10 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,8%7D%5Ba-z0-9%5D)?$/'. When using 'slurm_spec',
hyphens are not allowed ('/^[a-z][a-z0-9]{0,9}$/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#model_development_cluster_id GoogleVertexAiModelDevelopmentCluster#model_development_cluster_id}

---

##### `node_pools`<sup>Required</sup> <a name="node_pools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.nodePools"></a>

```python
node_pools: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterNodePools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]

node_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pools GoogleVertexAiModelDevelopmentCluster#node_pools}

---

##### `orchestrator_spec`<sup>Required</sup> <a name="orchestrator_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.orchestratorSpec"></a>

```python
orchestrator_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

orchestrator_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#orchestrator_spec GoogleVertexAiModelDevelopmentCluster#orchestrator_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#deletion_policy GoogleVertexAiModelDevelopmentCluster#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the ModelDevelopmentCluster.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#display_name GoogleVertexAiModelDevelopmentCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `lustre_export_config`<sup>Optional</sup> <a name="lustre_export_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lustreExportConfig"></a>

```python
lustre_export_config: GoogleVertexAiModelDevelopmentClusterLustreExportConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

lustre_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustre_export_config GoogleVertexAiModelDevelopmentCluster#lustre_export_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.network"></a>

```python
network: GoogleVertexAiModelDevelopmentClusterNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the ModelDevelopmentCluster. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#region GoogleVertexAiModelDevelopmentCluster#region}

---

##### `runtime_spec`<sup>Optional</sup> <a name="runtime_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.runtimeSpec"></a>

```python
runtime_spec: GoogleVertexAiModelDevelopmentClusterRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#runtime_spec GoogleVertexAiModelDevelopmentCluster#runtime_spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiModelDevelopmentClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#timeouts GoogleVertexAiModelDevelopmentCluster#timeouts}

---

### GoogleVertexAiModelDevelopmentClusterLustreExportConfig <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig(
  destination_bucket: str,
  days_of_week: typing.List[str] = None,
  lustres: typing.List[str] = None,
  start_time: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.destinationBucket">destination_bucket</a></code> | <code>str</code> | The Cloud Storage bucket that backups are written to, without the "gs://" scheme. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.lustres">lustres</a></code> | <code>typing.List[str]</code> | The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | start_time block. |

---

##### `destination_bucket`<sup>Required</sup> <a name="destination_bucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.destinationBucket"></a>

```python
destination_bucket: str
```

- *Type:* str

The Cloud Storage bucket that backups are written to, without the "gs://" scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#destination_bucket GoogleVertexAiModelDevelopmentCluster#destination_bucket}

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED.

If empty, a backup runs every day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#days_of_week GoogleVertexAiModelDevelopmentCluster#days_of_week}

---

##### `lustres`<sup>Optional</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.lustres"></a>

```python
lustres: typing.List[str]
```

- *Type:* typing.List[str]

The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}".

Every entry
must be attached to one of the cluster's node pools, and no entry may
repeat. If empty, every attached instance is backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.startTime"></a>

```python
start_time: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#start_time GoogleVertexAiModelDevelopmentCluster#start_time}

---

### GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#hours GoogleVertexAiModelDevelopmentCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#minutes GoogleVertexAiModelDevelopmentCluster#minutes}

---

### GoogleVertexAiModelDevelopmentClusterNetwork <a name="GoogleVertexAiModelDevelopmentClusterNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork(
  network: str,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.network">network</a></code> | <code>str</code> | The name of the VPC network where to create the cluster. The 'default' network is used if not specified. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork in the above network to create the cluster. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC network where to create the cluster. The 'default' network is used if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork in the above network to create the cluster.

If not specified:

* for auto mode VPC, the subnet in corresponding region is auto-selected;
* for custom mode VPC, a new subnet will be automatically created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#subnetwork GoogleVertexAiModelDevelopmentCluster#subnetwork}

---

### GoogleVertexAiModelDevelopmentClusterNodePools <a name="GoogleVertexAiModelDevelopmentClusterNodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools(
  id: str,
  machine_spec: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec,
  boot_disk: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk = None,
  enable_public_ips: bool | IResolvable = None,
  filestores: typing.List[str] = None,
  flex_start_max_duration: str = None,
  labels: typing.Mapping[str] = None,
  lustres: typing.List[str] = None,
  node_image: str = None,
  provisioning_model: str = None,
  scaling_spec: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec = None,
  startup_script: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.id">id</a></code> | <code>str</code> | The unique ID referring to this node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.enablePublicIps">enable_public_ips</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable public IPs for the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.filestores">filestores</a></code> | <code>typing.List[str]</code> | List of the existing Filestore instances to be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.flexStartMaxDuration">flex_start_max_duration</a></code> | <code>str</code> | The maximum duration for instances in this node pool. This field is only applicable when 'provisioning_model' is set to 'FLEX_START'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.lustres">lustres</a></code> | <code>typing.List[str]</code> | List of the existing Google Managed Lustre instances to be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.nodeImage">node_image</a></code> | <code>str</code> | The node image to be used for the VMs in the node pool. In format of "projects//global/images/" or "projects/test-project/global/images/family/". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | Specifies the provisioning model for the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.scalingSpec">scaling_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | scaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.startupScript">startup_script</a></code> | <code>str</code> | Startup script for the node pool instances. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.zone">zone</a></code> | <code>str</code> | The zone of the node pool. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.id"></a>

```python
id: str
```

- *Type:* str

The unique ID referring to this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#machine_spec GoogleVertexAiModelDevelopmentCluster#machine_spec}

---

##### `boot_disk`<sup>Optional</sup> <a name="boot_disk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.bootDisk"></a>

```python
boot_disk: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk GoogleVertexAiModelDevelopmentCluster#boot_disk}

---

##### `enable_public_ips`<sup>Optional</sup> <a name="enable_public_ips" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.enablePublicIps"></a>

```python
enable_public_ips: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable public IPs for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#enable_public_ips GoogleVertexAiModelDevelopmentCluster#enable_public_ips}

---

##### `filestores`<sup>Optional</sup> <a name="filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.filestores"></a>

```python
filestores: typing.List[str]
```

- *Type:* typing.List[str]

List of the existing Filestore instances to be mounted.

For example:
if "projects/my-project/locations/us-central1-a/instances/my-instance" is
specified, the instance will be mounted to the node pool under the path
"mnt/filestore/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#filestores GoogleVertexAiModelDevelopmentCluster#filestores}

---

##### `flex_start_max_duration`<sup>Optional</sup> <a name="flex_start_max_duration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.flexStartMaxDuration"></a>

```python
flex_start_max_duration: str
```

- *Type:* str

The maximum duration for instances in this node pool. This field is only applicable when 'provisioning_model' is set to 'FLEX_START'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#flex_start_max_duration GoogleVertexAiModelDevelopmentCluster#flex_start_max_duration}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize the node pool.

These
labels are applied to the underlying compute resources (for example, the
VM instances) of the node pool, so they appear in billing exports and
Cloud Monitoring filters.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `lustres`<sup>Optional</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.lustres"></a>

```python
lustres: typing.List[str]
```

- *Type:* typing.List[str]

List of the existing Google Managed Lustre instances to be mounted.

Similar to the filestores, the instance will be mounted to the node pool
under the path "/mnt/lustre/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

##### `node_image`<sup>Optional</sup> <a name="node_image" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.nodeImage"></a>

```python
node_image: str
```

- *Type:* str

The node image to be used for the VMs in the node pool. In format of "projects//global/images/" or "projects/test-project/global/images/family/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_image GoogleVertexAiModelDevelopmentCluster#node_image}

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

Specifies the provisioning model for the node pool.

Behavior for 'PROVISIONING_MODEL_UNSPECIFIED':

* For CPU node pools: Defaults to 'ON_DEMAND'.
* For GPU node pools:
* If
  'machine_spec.reservation_affinity'
  is set, it defaults to 'RESERVATION'.
* If
  'machine_spec.reservation_affinity'
  is NOT set, this is an INVALID state and the request will be rejected.
  An explicit 'provisioning_model' must be provided.

## Constraints:

'machine_spec.reservation_affinity'
must not be set if 'provisioning_model' is 'ON_DEMAND', 'SPOT' or

## 'FLEX_START'.

'machine_spec.reservation_affinity'
must be set if 'provisioning_model' is 'RESERVATION'.
Possible values:
ON_DEMAND
RESERVATION
SPOT
FLEX_START

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#provisioning_model GoogleVertexAiModelDevelopmentCluster#provisioning_model}

---

##### `scaling_spec`<sup>Optional</sup> <a name="scaling_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.scalingSpec"></a>

```python
scaling_spec: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

scaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#scaling_spec GoogleVertexAiModelDevelopmentCluster#scaling_spec}

---

##### `startup_script`<sup>Optional</sup> <a name="startup_script" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.startupScript"></a>

```python
startup_script: str
```

- *Type:* str

Startup script for the node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#startup_script GoogleVertexAiModelDevelopmentCluster#startup_script}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#zone GoogleVertexAiModelDevelopmentCluster#zone}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk(
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Type of the boot disk. |

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_size_gb GoogleVertexAiModelDevelopmentCluster#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_type GoogleVertexAiModelDevelopmentCluster#boot_disk_type}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec(
  machine_type: str,
  reservation_affinity: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For DeployedModel this field is optional, and the default
value is 'n1-standard-2'. For BatchPredictionJob or as part of
WorkerPoolSpec this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#machine_type GoogleVertexAiModelDevelopmentCluster#machine_type}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity GoogleVertexAiModelDevelopmentCluster#reservation_affinity}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity(
  reservation_affinity_type: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.reservationAffinityType">reservation_affinity_type</a></code> | <code>str</code> | Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | Corresponds to the label values of a reservation resource. |

---

##### `reservation_affinity_type`<sup>Required</sup> <a name="reservation_affinity_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```python
reservation_affinity_type: str
```

- *Type:* str

Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity_type GoogleVertexAiModelDevelopmentCluster#reservation_affinity_type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

This must be the
resource name of the reservation, reservation block, or reservation sub-
block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#values GoogleVertexAiModelDevelopmentCluster#values}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec(
  max_node_count: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | maximum size of the node pool, must be ≥ min_node_count. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | minimum size of the node pool, must be >= 0 and <= max_node_count. |

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

maximum size of the node pool, must be ≥ min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#max_node_count GoogleVertexAiModelDevelopmentCluster#max_node_count}

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

minimum size of the node pool, must be >= 0 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#min_node_count GoogleVertexAiModelDevelopmentCluster#min_node_count}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpec <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec(
  slurm_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.property.slurmSpec">slurm_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | slurm_spec block. |

---

##### `slurm_spec`<sup>Optional</sup> <a name="slurm_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.property.slurmSpec"></a>

```python
slurm_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

slurm_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#slurm_spec GoogleVertexAiModelDevelopmentCluster#slurm_spec}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec(
  home_directory_storage: str,
  login_node_pool_id: str,
  config: typing.Mapping[str] = None,
  default_partition_id: str = None,
  epilog_bash_scripts: typing.List[str] = None,
  node_sets: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets] = None,
  partitions: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions] = None,
  prolog_bash_scripts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.homeDirectoryStorage">home_directory_storage</a></code> | <code>str</code> | Full name of the Filestore to be mounted as /home directory on every node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.loginNodePoolId">login_node_pool_id</a></code> | <code>str</code> | The node pool id to be used as slurm login node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.config">config</a></code> | <code>typing.Mapping[str]</code> | Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in slurm.conf. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.defaultPartitionId">default_partition_id</a></code> | <code>str</code> | Id of the partition that Slurm jobs submitted without an explicit partition run on, for example 'sbatch' without '--partition'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.epilogBashScripts">epilog_bash_scripts</a></code> | <code>typing.List[str]</code> | Custom bash scripts executed after each slurm job on every allocated node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.nodeSets">node_sets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]</code> | node_sets block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.partitions">partitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]</code> | partitions block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.prologBashScripts">prolog_bash_scripts</a></code> | <code>typing.List[str]</code> | Custom bash scripts executed before each slurm job on every allocated node. |

---

##### `home_directory_storage`<sup>Required</sup> <a name="home_directory_storage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.homeDirectoryStorage"></a>

```python
home_directory_storage: str
```

- *Type:* str

Full name of the Filestore to be mounted as /home directory on every node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#home_directory_storage GoogleVertexAiModelDevelopmentCluster#home_directory_storage}

---

##### `login_node_pool_id`<sup>Required</sup> <a name="login_node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.loginNodePoolId"></a>

```python
login_node_pool_id: str
```

- *Type:* str

The node pool id to be used as slurm login node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#login_node_pool_id GoogleVertexAiModelDevelopmentCluster#login_node_pool_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in slurm.conf.

Keys are Slurm parameter names exactly as documented by SchedMD
(https://slurm.schedmd.com/slurm.conf.html), matched case-insensitively.
Values are written the way slurm.conf writes them, including composite
forms such as 'bf_window=1440,bf_resolution=600'.

Example:
{ "PriorityType":            "priority/multifactor",
"PriorityWeightAge":       "1000",
"PreemptMode":             "SUSPEND,GANG",
"SchedulerParameters":     "bf_window=1440,bf_resolution=600" }

Unsupported, reserved, or misspelled parameters, and values that are not
legal for the parameter, are rejected at request time with the offending
parameter named; they are never silently dropped. Settings
that apply to a single partition or node pool belong in
'SlurmPartition.config' or 'SlurmNodeSet.config' instead -
several parameters (e.g. 'DefMemPerCPU', 'OverTimeLimit', 'PreemptMode')
are valid at more than one scope with different meanings and different
legal values.

On update this map is replaced wholesale; supply the complete desired set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

##### `default_partition_id`<sup>Optional</sup> <a name="default_partition_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.defaultPartitionId"></a>

```python
default_partition_id: str
```

- *Type:* str

Id of the partition that Slurm jobs submitted without an explicit partition run on, for example 'sbatch' without '--partition'.

Must match
the 'id' of one of 'partitions'.

If unset, the service uses the first entry of 'partitions' and this field
stays empty; the cluster always has a default partition whether or not this
field is set. Setting it makes the choice independent of list order, which
matters because 'partitions' is replaced wholesale on update: reordering
the list, or prepending a partition to it, otherwise moves the default and
silently redirects every job submitted without '--partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#default_partition_id GoogleVertexAiModelDevelopmentCluster#default_partition_id}

---

##### `epilog_bash_scripts`<sup>Optional</sup> <a name="epilog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.epilogBashScripts"></a>

```python
epilog_bash_scripts: typing.List[str]
```

- *Type:* typing.List[str]

Custom bash scripts executed after each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#epilog_bash_scripts GoogleVertexAiModelDevelopmentCluster#epilog_bash_scripts}

---

##### `node_sets`<sup>Optional</sup> <a name="node_sets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.nodeSets"></a>

```python
node_sets: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]

node_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_sets GoogleVertexAiModelDevelopmentCluster#node_sets}

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.partitions"></a>

```python
partitions: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]

partitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#partitions GoogleVertexAiModelDevelopmentCluster#partitions}

---

##### `prolog_bash_scripts`<sup>Optional</sup> <a name="prolog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.prologBashScripts"></a>

```python
prolog_bash_scripts: typing.List[str]
```

- *Type:* typing.List[str]

Custom bash scripts executed before each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#prolog_bash_scripts GoogleVertexAiModelDevelopmentCluster#prolog_bash_scripts}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets(
  node_pool_id: str,
  config: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | Id of the node pool these settings apply to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.config">config</a></code> | <code>typing.Mapping[str]</code> | Node-scoped Slurm settings, emitted as additional 'Key=Value' pairs on the 'NodeName=' line for this node pool's nodes in slurm.conf. |

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

Id of the node pool these settings apply to.

Must match the 'id' of one of
the node pools in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pool_id GoogleVertexAiModelDevelopmentCluster#node_pool_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Node-scoped Slurm settings, emitted as additional 'Key=Value' pairs on the 'NodeName=' line for this node pool's nodes in slurm.conf.

Example:
{ "Features":     "a3mega,nvlink",
"Weight":       "10",
"MemSpecLimit": "4096" }

On update this map is replaced wholesale; supply the complete desired set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions(
  id: str,
  node_pool_ids: typing.List[str],
  config: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.id">id</a></code> | <code>str</code> | Id of the slurm partiton. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.nodePoolIds">node_pool_ids</a></code> | <code>typing.List[str]</code> | Node pools for the slurm partition. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.config">config</a></code> | <code>typing.Mapping[str]</code> | Partition-scoped Slurm settings, emitted as additional 'Key=Value' pairs on this partition's 'PartitionName=' line in slurm.conf. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.id"></a>

```python
id: str
```

- *Type:* str

Id of the slurm partiton.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_pool_ids`<sup>Required</sup> <a name="node_pool_ids" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.nodePoolIds"></a>

```python
node_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

Node pools for the slurm partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pool_ids GoogleVertexAiModelDevelopmentCluster#node_pool_ids}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Partition-scoped Slurm settings, emitted as additional 'Key=Value' pairs on this partition's 'PartitionName=' line in slurm.conf.

Example:
{ "MaxTime":       "4-00:00:00",
"DenyAccounts":  "low-pri",
"PriorityTier":  "20",
"OverSubscribe": "YES:4" }

Note: values set here take precedence over service-computed defaults for
the same parameter (for example 'OverSubscribe' and 'DefMemPerCPU', which
the service otherwise derives from the partition's exclusivity and from
the memory per CPU of its nodes).

'Default' is rejected here: which partition is the default is a
cluster-scoped choice, so it belongs in 'SlurmSpec.default_partition_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

### GoogleVertexAiModelDevelopmentClusterRuntime <a name="GoogleVertexAiModelDevelopmentClusterRuntime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime()
```


### GoogleVertexAiModelDevelopmentClusterRuntimeSpec <a name="GoogleVertexAiModelDevelopmentClusterRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec(
  service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.property.serviceAccount">service_account</a></code> | <code>str</code> | The default service account used by the cluster when running any workloads on it. |

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The default service account used by the cluster when running any workloads on it.

If not specified, the default compute engine service account will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#service_account GoogleVertexAiModelDevelopmentCluster#service_account}

---

### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices()
```


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec()
```


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus()
```


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanager <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanager" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager()
```


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError()
```


### GoogleVertexAiModelDevelopmentClusterTimeouts <a name="GoogleVertexAiModelDevelopmentClusterTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiModelDevelopmentClusterClusterEventsList <a name="GoogleVertexAiModelDevelopmentClusterClusterEventsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventMessage">event_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventTime">event_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents">GoogleVertexAiModelDevelopmentClusterClusterEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_message`<sup>Required</sup> <a name="event_message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventMessage"></a>

```python
event_message: str
```

- *Type:* str

---

##### `event_time`<sup>Required</sup> <a name="event_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventTime"></a>

```python
event_time: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterClusterEvents
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents">GoogleVertexAiModelDevelopmentClusterClusterEvents</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError">GoogleVertexAiModelDevelopmentClusterClusterStatusError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterClusterStatusError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError">GoogleVertexAiModelDevelopmentClusterClusterStatusError</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolType">node_pool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodeState">node_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.physicalHost">physical_host</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

---

##### `node_pool_type`<sup>Required</sup> <a name="node_pool_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolType"></a>

```python
node_pool_type: str
```

- *Type:* str

---

##### `node_state`<sup>Required</sup> <a name="node_state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodeState"></a>

```python
node_state: str
```

- *Type:* str

---

##### `physical_host`<sup>Required</sup> <a name="physical_host" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.physicalHost"></a>

```python
physical_host: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.blockId">block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.subblockId">subblock_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_id`<sup>Required</sup> <a name="block_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.blockId"></a>

```python
block_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `subblock_id`<sup>Required</sup> <a name="subblock_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.subblockId"></a>

```python
subblock_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList">GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.nodesStatus">nodes_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus">GoogleVertexAiModelDevelopmentClusterClusterStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.error"></a>

```python
error: GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList">GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList</a>

---

##### `nodes_status`<sup>Required</sup> <a name="nodes_status" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.nodesStatus"></a>

```python
nodes_status: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterClusterStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus">GoogleVertexAiModelDevelopmentClusterClusterStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime">put_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetLustres">reset_lustres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#hours GoogleVertexAiModelDevelopmentCluster#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#minutes GoogleVertexAiModelDevelopmentCluster#minutes}

---

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_lustres` <a name="reset_lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetLustres"></a>

```python
def reset_lustres() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucketInput">destination_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustresInput">lustres_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucket">destination_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustres">lustres</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTime"></a>

```python
start_time: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference</a>

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_bucket_input`<sup>Optional</sup> <a name="destination_bucket_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucketInput"></a>

```python
destination_bucket_input: str
```

- *Type:* str

---

##### `lustres_input`<sup>Optional</sup> <a name="lustres_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustresInput"></a>

```python
lustres_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTimeInput"></a>

```python
start_time_input: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_bucket`<sup>Required</sup> <a name="destination_bucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucket"></a>

```python
destination_bucket: str
```

- *Type:* str

---

##### `lustres`<sup>Required</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustres"></a>

```python
lustres: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterLustreExportConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---


### GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---


### GoogleVertexAiModelDevelopmentClusterNetworkOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNetworkOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskType">reset_boot_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_boot_disk_type` <a name="reset_boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskType"></a>

```python
def reset_boot_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskTypeInput">boot_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type_input`<sup>Optional</sup> <a name="boot_disk_type_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskTypeInput"></a>

```python
boot_disk_type_input: str
```

- *Type:* str

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type`<sup>Required</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsList <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterNodePools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>]

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  reservation_affinity_type: str,
  values: typing.List[str] = None
) -> None
```

###### `reservation_affinity_type`<sup>Required</sup> <a name="reservation_affinity_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity.parameter.reservationAffinityType"></a>

- *Type:* str

Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity_type GoogleVertexAiModelDevelopmentCluster#reservation_affinity_type}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity.parameter.values"></a>

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

This must be the
resource name of the reservation, reservation block, or reservation sub-
block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#values GoogleVertexAiModelDevelopmentCluster#values}

---

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference</a>

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">reservation_affinity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">reservation_affinity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reservation_affinity_type_input`<sup>Optional</sup> <a name="reservation_affinity_type_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```python
reservation_affinity_type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reservation_affinity_type`<sup>Required</sup> <a name="reservation_affinity_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```python
reservation_affinity_type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk">put_boot_disk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec">put_scaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetBootDisk">reset_boot_disk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetEnablePublicIps">reset_enable_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFilestores">reset_filestores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFlexStartMaxDuration">reset_flex_start_max_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLustres">reset_lustres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetNodeImage">reset_node_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetProvisioningModel">reset_provisioning_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetScalingSpec">reset_scaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetStartupScript">reset_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boot_disk` <a name="put_boot_disk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk"></a>

```python
def put_boot_disk(
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None
) -> None
```

###### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_size_gb GoogleVertexAiModelDevelopmentCluster#boot_disk_size_gb}

---

###### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk.parameter.bootDiskType"></a>

- *Type:* str

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_type GoogleVertexAiModelDevelopmentCluster#boot_disk_type}

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec"></a>

```python
def put_machine_spec(
  machine_type: str,
  reservation_affinity: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity = None
) -> None
```

###### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For DeployedModel this field is optional, and the default
value is 'n1-standard-2'. For BatchPredictionJob or as part of
WorkerPoolSpec this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#machine_type GoogleVertexAiModelDevelopmentCluster#machine_type}

---

###### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity GoogleVertexAiModelDevelopmentCluster#reservation_affinity}

---

##### `put_scaling_spec` <a name="put_scaling_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec"></a>

```python
def put_scaling_spec(
  max_node_count: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None
) -> None
```

###### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

maximum size of the node pool, must be ≥ min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#max_node_count GoogleVertexAiModelDevelopmentCluster#max_node_count}

---

###### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

minimum size of the node pool, must be >= 0 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#min_node_count GoogleVertexAiModelDevelopmentCluster#min_node_count}

---

##### `reset_boot_disk` <a name="reset_boot_disk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetBootDisk"></a>

```python
def reset_boot_disk() -> None
```

##### `reset_enable_public_ips` <a name="reset_enable_public_ips" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetEnablePublicIps"></a>

```python
def reset_enable_public_ips() -> None
```

##### `reset_filestores` <a name="reset_filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFilestores"></a>

```python
def reset_filestores() -> None
```

##### `reset_flex_start_max_duration` <a name="reset_flex_start_max_duration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFlexStartMaxDuration"></a>

```python
def reset_flex_start_max_duration() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lustres` <a name="reset_lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLustres"></a>

```python
def reset_lustres() -> None
```

##### `reset_node_image` <a name="reset_node_image" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetNodeImage"></a>

```python
def reset_node_image() -> None
```

##### `reset_provisioning_model` <a name="reset_provisioning_model" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetProvisioningModel"></a>

```python
def reset_provisioning_model() -> None
```

##### `reset_scaling_spec` <a name="reset_scaling_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetScalingSpec"></a>

```python
def reset_scaling_spec() -> None
```

##### `reset_startup_script` <a name="reset_startup_script" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetStartupScript"></a>

```python
def reset_startup_script() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.effectiveFlexStartMaxDuration">effective_flex_start_max_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpec">scaling_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDiskInput">boot_disk_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIpsInput">enable_public_ips_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestoresInput">filestores_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDurationInput">flex_start_max_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustresInput">lustres_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImageInput">node_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModelInput">provisioning_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpecInput">scaling_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScriptInput">startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIps">enable_public_ips</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestores">filestores</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDuration">flex_start_max_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustres">lustres</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImage">node_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScript">startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_disk`<sup>Required</sup> <a name="boot_disk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDisk"></a>

```python
boot_disk: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference</a>

---

##### `effective_flex_start_max_duration`<sup>Required</sup> <a name="effective_flex_start_max_duration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.effectiveFlexStartMaxDuration"></a>

```python
effective_flex_start_max_duration: str
```

- *Type:* str

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference</a>

---

##### `scaling_spec`<sup>Required</sup> <a name="scaling_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpec"></a>

```python
scaling_spec: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference</a>

---

##### `boot_disk_input`<sup>Optional</sup> <a name="boot_disk_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDiskInput"></a>

```python
boot_disk_input: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---

##### `enable_public_ips_input`<sup>Optional</sup> <a name="enable_public_ips_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIpsInput"></a>

```python
enable_public_ips_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filestores_input`<sup>Optional</sup> <a name="filestores_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestoresInput"></a>

```python
filestores_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `flex_start_max_duration_input`<sup>Optional</sup> <a name="flex_start_max_duration_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDurationInput"></a>

```python
flex_start_max_duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lustres_input`<sup>Optional</sup> <a name="lustres_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustresInput"></a>

```python
lustres_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpecInput"></a>

```python
machine_spec_input: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---

##### `node_image_input`<sup>Optional</sup> <a name="node_image_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImageInput"></a>

```python
node_image_input: str
```

- *Type:* str

---

##### `provisioning_model_input`<sup>Optional</sup> <a name="provisioning_model_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModelInput"></a>

```python
provisioning_model_input: str
```

- *Type:* str

---

##### `scaling_spec_input`<sup>Optional</sup> <a name="scaling_spec_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpecInput"></a>

```python
scaling_spec_input: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---

##### `startup_script_input`<sup>Optional</sup> <a name="startup_script_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScriptInput"></a>

```python
startup_script_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `enable_public_ips`<sup>Required</sup> <a name="enable_public_ips" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIps"></a>

```python
enable_public_ips: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filestores`<sup>Required</sup> <a name="filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestores"></a>

```python
filestores: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `flex_start_max_duration`<sup>Required</sup> <a name="flex_start_max_duration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDuration"></a>

```python
flex_start_max_duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lustres`<sup>Required</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustres"></a>

```python
lustres: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_image`<sup>Required</sup> <a name="node_image" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImage"></a>

```python
node_image: str
```

- *Type:* str

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `startup_script`<sup>Required</sup> <a name="startup_script" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScript"></a>

```python
startup_script: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiModelDevelopmentClusterNodePools
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_node_count` <a name="reset_max_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec">put_slurm_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resetSlurmSpec">reset_slurm_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_slurm_spec` <a name="put_slurm_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec"></a>

```python
def put_slurm_spec(
  home_directory_storage: str,
  login_node_pool_id: str,
  config: typing.Mapping[str] = None,
  default_partition_id: str = None,
  epilog_bash_scripts: typing.List[str] = None,
  node_sets: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets] = None,
  partitions: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions] = None,
  prolog_bash_scripts: typing.List[str] = None
) -> None
```

###### `home_directory_storage`<sup>Required</sup> <a name="home_directory_storage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.homeDirectoryStorage"></a>

- *Type:* str

Full name of the Filestore to be mounted as /home directory on every node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#home_directory_storage GoogleVertexAiModelDevelopmentCluster#home_directory_storage}

---

###### `login_node_pool_id`<sup>Required</sup> <a name="login_node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.loginNodePoolId"></a>

- *Type:* str

The node pool id to be used as slurm login node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#login_node_pool_id GoogleVertexAiModelDevelopmentCluster#login_node_pool_id}

---

###### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.config"></a>

- *Type:* typing.Mapping[str]

Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in slurm.conf.

Keys are Slurm parameter names exactly as documented by SchedMD
(https://slurm.schedmd.com/slurm.conf.html), matched case-insensitively.
Values are written the way slurm.conf writes them, including composite
forms such as 'bf_window=1440,bf_resolution=600'.

Example:
{ "PriorityType":            "priority/multifactor",
"PriorityWeightAge":       "1000",
"PreemptMode":             "SUSPEND,GANG",
"SchedulerParameters":     "bf_window=1440,bf_resolution=600" }

Unsupported, reserved, or misspelled parameters, and values that are not
legal for the parameter, are rejected at request time with the offending
parameter named; they are never silently dropped. Settings
that apply to a single partition or node pool belong in
'SlurmPartition.config' or 'SlurmNodeSet.config' instead -
several parameters (e.g. 'DefMemPerCPU', 'OverTimeLimit', 'PreemptMode')
are valid at more than one scope with different meanings and different
legal values.

On update this map is replaced wholesale; supply the complete desired set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

###### `default_partition_id`<sup>Optional</sup> <a name="default_partition_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.defaultPartitionId"></a>

- *Type:* str

Id of the partition that Slurm jobs submitted without an explicit partition run on, for example 'sbatch' without '--partition'.

Must match
the 'id' of one of 'partitions'.

If unset, the service uses the first entry of 'partitions' and this field
stays empty; the cluster always has a default partition whether or not this
field is set. Setting it makes the choice independent of list order, which
matters because 'partitions' is replaced wholesale on update: reordering
the list, or prepending a partition to it, otherwise moves the default and
silently redirects every job submitted without '--partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#default_partition_id GoogleVertexAiModelDevelopmentCluster#default_partition_id}

---

###### `epilog_bash_scripts`<sup>Optional</sup> <a name="epilog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.epilogBashScripts"></a>

- *Type:* typing.List[str]

Custom bash scripts executed after each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#epilog_bash_scripts GoogleVertexAiModelDevelopmentCluster#epilog_bash_scripts}

---

###### `node_sets`<sup>Optional</sup> <a name="node_sets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.nodeSets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]

node_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_sets GoogleVertexAiModelDevelopmentCluster#node_sets}

---

###### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.partitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]

partitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#partitions GoogleVertexAiModelDevelopmentCluster#partitions}

---

###### `prolog_bash_scripts`<sup>Optional</sup> <a name="prolog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.prologBashScripts"></a>

- *Type:* typing.List[str]

Custom bash scripts executed before each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#prolog_bash_scripts GoogleVertexAiModelDevelopmentCluster#prolog_bash_scripts}

---

##### `reset_slurm_spec` <a name="reset_slurm_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resetSlurmSpec"></a>

```python
def reset_slurm_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpec">slurm_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpecInput">slurm_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `slurm_spec`<sup>Required</sup> <a name="slurm_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpec"></a>

```python
slurm_spec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference</a>

---

##### `slurm_spec_input`<sup>Optional</sup> <a name="slurm_spec_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpecInput"></a>

```python
slurm_spec_input: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resetConfig">reset_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config` <a name="reset_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolIdInput">node_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_pool_id_input`<sup>Optional</sup> <a name="node_pool_id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolIdInput"></a>

```python
node_pool_id_input: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets">put_node_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions">put_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetDefaultPartitionId">reset_default_partition_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetEpilogBashScripts">reset_epilog_bash_scripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetNodeSets">reset_node_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPartitions">reset_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPrologBashScripts">reset_prolog_bash_scripts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_sets` <a name="put_node_sets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets"></a>

```python
def put_node_sets(
  value: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]

---

##### `put_partitions` <a name="put_partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions"></a>

```python
def put_partitions(
  value: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_default_partition_id` <a name="reset_default_partition_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetDefaultPartitionId"></a>

```python
def reset_default_partition_id() -> None
```

##### `reset_epilog_bash_scripts` <a name="reset_epilog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetEpilogBashScripts"></a>

```python
def reset_epilog_bash_scripts() -> None
```

##### `reset_node_sets` <a name="reset_node_sets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetNodeSets"></a>

```python
def reset_node_sets() -> None
```

##### `reset_partitions` <a name="reset_partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPartitions"></a>

```python
def reset_partitions() -> None
```

##### `reset_prolog_bash_scripts` <a name="reset_prolog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPrologBashScripts"></a>

```python
def reset_prolog_bash_scripts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSets">node_sets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionIdInput">default_partition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScriptsInput">epilog_bash_scripts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorageInput">home_directory_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolIdInput">login_node_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSetsInput">node_sets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitionsInput">partitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScriptsInput">prolog_bash_scripts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionId">default_partition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScripts">epilog_bash_scripts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorage">home_directory_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolId">login_node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScripts">prolog_bash_scripts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_sets`<sup>Required</sup> <a name="node_sets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSets"></a>

```python
node_sets: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList</a>

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitions"></a>

```python
partitions: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_partition_id_input`<sup>Optional</sup> <a name="default_partition_id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionIdInput"></a>

```python
default_partition_id_input: str
```

- *Type:* str

---

##### `epilog_bash_scripts_input`<sup>Optional</sup> <a name="epilog_bash_scripts_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScriptsInput"></a>

```python
epilog_bash_scripts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `home_directory_storage_input`<sup>Optional</sup> <a name="home_directory_storage_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorageInput"></a>

```python
home_directory_storage_input: str
```

- *Type:* str

---

##### `login_node_pool_id_input`<sup>Optional</sup> <a name="login_node_pool_id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolIdInput"></a>

```python
login_node_pool_id_input: str
```

- *Type:* str

---

##### `node_sets_input`<sup>Optional</sup> <a name="node_sets_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSetsInput"></a>

```python
node_sets_input: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>]

---

##### `partitions_input`<sup>Optional</sup> <a name="partitions_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitionsInput"></a>

```python
partitions_input: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]

---

##### `prolog_bash_scripts_input`<sup>Optional</sup> <a name="prolog_bash_scripts_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScriptsInput"></a>

```python
prolog_bash_scripts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_partition_id`<sup>Required</sup> <a name="default_partition_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionId"></a>

```python
default_partition_id: str
```

- *Type:* str

---

##### `epilog_bash_scripts`<sup>Required</sup> <a name="epilog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScripts"></a>

```python
epilog_bash_scripts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `home_directory_storage`<sup>Required</sup> <a name="home_directory_storage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorage"></a>

```python
home_directory_storage: str
```

- *Type:* str

---

##### `login_node_pool_id`<sup>Required</sup> <a name="login_node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolId"></a>

```python
login_node_pool_id: str
```

- *Type:* str

---

##### `prolog_bash_scripts`<sup>Required</sup> <a name="prolog_bash_scripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScripts"></a>

```python
prolog_bash_scripts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>]

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resetConfig">reset_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config` <a name="reset_config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIdsInput">node_pool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIds">node_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `node_pool_ids_input`<sup>Optional</sup> <a name="node_pool_ids_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIdsInput"></a>

```python
node_pool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `node_pool_ids`<sup>Required</sup> <a name="node_pool_ids" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIds"></a>

```python
node_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.trainingServices">training_services</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.xmanager">xmanager</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime">GoogleVertexAiModelDevelopmentClusterRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `training_services`<sup>Required</sup> <a name="training_services" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.trainingServices"></a>

```python
training_services: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList</a>

---

##### `xmanager`<sup>Required</sup> <a name="xmanager" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.xmanager"></a>

```python
xmanager: GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime">GoogleVertexAiModelDevelopmentClusterRuntime</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodeCount">worker_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodePoolId">worker_node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_node_count`<sup>Required</sup> <a name="worker_node_count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodeCount"></a>

```python
worker_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_node_pool_id`<sup>Required</sup> <a name="worker_node_pool_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodePoolId"></a>

```python
worker_node_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.deploymentSpec">deployment_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.serviceStatus">service_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deployment_spec`<sup>Required</sup> <a name="deployment_spec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.deploymentSpec"></a>

```python
deployment_spec: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList</a>

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_status`<sup>Required</sup> <a name="service_status" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.serviceStatus"></a>

```python
service_status: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.endpoints">endpoints</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.endpoints"></a>

```python
endpoints: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.apiEndpoint">api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.uiEndpoint">ui_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager">GoogleVertexAiModelDevelopmentClusterRuntimeXmanager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_endpoint`<sup>Required</sup> <a name="api_endpoint" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.apiEndpoint"></a>

```python
api_endpoint: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.error"></a>

```python
error: GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList</a>

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `ui_endpoint`<sup>Required</sup> <a name="ui_endpoint" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.uiEndpoint"></a>

```python
ui_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiModelDevelopmentClusterRuntimeXmanager
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager">GoogleVertexAiModelDevelopmentClusterRuntimeXmanager</a>

---


### GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_development_cluster

googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiModelDevelopmentClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---



