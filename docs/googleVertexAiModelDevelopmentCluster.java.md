# `googleVertexAiModelDevelopmentCluster` Submodule <a name="`googleVertexAiModelDevelopmentCluster` Submodule" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiModelDevelopmentCluster <a name="GoogleVertexAiModelDevelopmentCluster" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster google_vertex_ai_model_development_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentCluster;

GoogleVertexAiModelDevelopmentCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .modelDevelopmentClusterId(java.lang.String)
    .nodePools(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterNodePools>)
    .orchestratorSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpec)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lustreExportConfig(GoogleVertexAiModelDevelopmentClusterLustreExportConfig)
//  .network(GoogleVertexAiModelDevelopmentClusterNetwork)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .runtimeSpec(GoogleVertexAiModelDevelopmentClusterRuntimeSpec)
//  .timeouts(GoogleVertexAiModelDevelopmentClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.modelDevelopmentClusterId">modelDevelopmentClusterId</a></code> | <code>java.lang.String</code> | The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.nodePools">nodePools</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>></code> | node_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.orchestratorSpec">orchestratorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | orchestrator_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the ModelDevelopmentCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lustreExportConfig">lustreExportConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | lustre_export_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the ModelDevelopmentCluster. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.runtimeSpec">runtimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `modelDevelopmentClusterId`<sup>Required</sup> <a name="modelDevelopmentClusterId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.modelDevelopmentClusterId"></a>

- *Type:* java.lang.String

The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name.

This value should be 1-10 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,8%7D%5Ba-z0-9%5D)?$/'. When using 'slurm_spec',
hyphens are not allowed ('/^[a-z][a-z0-9]{0,9}$/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#model_development_cluster_id GoogleVertexAiModelDevelopmentCluster#model_development_cluster_id}

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.nodePools"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>>

node_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pools GoogleVertexAiModelDevelopmentCluster#node_pools}

---

##### `orchestratorSpec`<sup>Required</sup> <a name="orchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.orchestratorSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

orchestrator_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#orchestrator_spec GoogleVertexAiModelDevelopmentCluster#orchestrator_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#deletion_policy GoogleVertexAiModelDevelopmentCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the ModelDevelopmentCluster.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#display_name GoogleVertexAiModelDevelopmentCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `lustreExportConfig`<sup>Optional</sup> <a name="lustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.lustreExportConfig"></a>

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

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the ModelDevelopmentCluster. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#region GoogleVertexAiModelDevelopmentCluster#region}

---

##### `runtimeSpec`<sup>Optional</sup> <a name="runtimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.runtimeSpec"></a>

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
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig">putLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools">putNodePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec">putOrchestratorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec">putRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLustreExportConfig">resetLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRuntimeSpec">resetRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLustreExportConfig` <a name="putLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig"></a>

```java
public void putLustreExportConfig(GoogleVertexAiModelDevelopmentClusterLustreExportConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork"></a>

```java
public void putNetwork(GoogleVertexAiModelDevelopmentClusterNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---

##### `putNodePools` <a name="putNodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools"></a>

```java
public void putNodePools(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterNodePools> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>>

---

##### `putOrchestratorSpec` <a name="putOrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec"></a>

```java
public void putOrchestratorSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---

##### `putRuntimeSpec` <a name="putRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec"></a>

```java
public void putRuntimeSpec(GoogleVertexAiModelDevelopmentClusterRuntimeSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiModelDevelopmentClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLustreExportConfig` <a name="resetLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLustreExportConfig"></a>

```java
public void resetLustreExportConfig()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRuntimeSpec` <a name="resetRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRuntimeSpec"></a>

```java
public void resetRuntimeSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentCluster;

GoogleVertexAiModelDevelopmentCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentCluster;

GoogleVertexAiModelDevelopmentCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentCluster;

GoogleVertexAiModelDevelopmentCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentCluster;

GoogleVertexAiModelDevelopmentCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiModelDevelopmentCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiModelDevelopmentCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiModelDevelopmentCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiModelDevelopmentCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterEvents">clusterEvents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList">GoogleVertexAiModelDevelopmentClusterClusterEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterStatus">clusterStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfig">lustreExportConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference">GoogleVertexAiModelDevelopmentClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePools">nodePools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList">GoogleVertexAiModelDevelopmentClusterNodePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpec">orchestratorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList">GoogleVertexAiModelDevelopmentClusterRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpec">runtimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference">GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference">GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfigInput">lustreExportConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterIdInput">modelDevelopmentClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.networkInput">networkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePoolsInput">nodePoolsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpecInput">orchestratorSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpecInput">runtimeSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterId">modelDevelopmentClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterEvents`<sup>Required</sup> <a name="clusterEvents" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterEvents"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterEventsList getClusterEvents();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList">GoogleVertexAiModelDevelopmentClusterClusterEventsList</a>

---

##### `clusterStatus`<sup>Required</sup> <a name="clusterStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterStatus"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusList getClusterStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `lustreExportConfig`<sup>Required</sup> <a name="lustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfig"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference getLustreExportConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.network"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference">GoogleVertexAiModelDevelopmentClusterNetworkOutputReference</a>

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePools"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsList getNodePools();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList">GoogleVertexAiModelDevelopmentClusterNodePoolsList</a>

---

##### `orchestratorSpec`<sup>Required</sup> <a name="orchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference getOrchestratorSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtime"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeList getRuntime();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList">GoogleVertexAiModelDevelopmentClusterRuntimeList</a>

---

##### `runtimeSpec`<sup>Required</sup> <a name="runtimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference getRuntimeSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference">GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeouts"></a>

```java
public GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference">GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lustreExportConfigInput`<sup>Optional</sup> <a name="lustreExportConfigInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfigInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfig getLustreExportConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---

##### `modelDevelopmentClusterIdInput`<sup>Optional</sup> <a name="modelDevelopmentClusterIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterIdInput"></a>

```java
public java.lang.String getModelDevelopmentClusterIdInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.networkInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---

##### `nodePoolsInput`<sup>Optional</sup> <a name="nodePoolsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePoolsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterNodePools> getNodePoolsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>>

---

##### `orchestratorSpecInput`<sup>Optional</sup> <a name="orchestratorSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpecInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpec getOrchestratorSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `runtimeSpecInput`<sup>Optional</sup> <a name="runtimeSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpecInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeSpec getRuntimeSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiModelDevelopmentClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelDevelopmentClusterId`<sup>Required</sup> <a name="modelDevelopmentClusterId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterId"></a>

```java
public java.lang.String getModelDevelopmentClusterId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiModelDevelopmentClusterClusterEvents <a name="GoogleVertexAiModelDevelopmentClusterClusterEvents" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterEvents;

GoogleVertexAiModelDevelopmentClusterClusterEvents.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterClusterStatus <a name="GoogleVertexAiModelDevelopmentClusterClusterStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatus;

GoogleVertexAiModelDevelopmentClusterClusterStatus.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusError <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusError" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError;

GoogleVertexAiModelDevelopmentClusterClusterStatusError.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus;

GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost;

GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterConfig <a name="GoogleVertexAiModelDevelopmentClusterConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterConfig;

GoogleVertexAiModelDevelopmentClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .modelDevelopmentClusterId(java.lang.String)
    .nodePools(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterNodePools>)
    .orchestratorSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpec)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lustreExportConfig(GoogleVertexAiModelDevelopmentClusterLustreExportConfig)
//  .network(GoogleVertexAiModelDevelopmentClusterNetwork)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .runtimeSpec(GoogleVertexAiModelDevelopmentClusterRuntimeSpec)
//  .timeouts(GoogleVertexAiModelDevelopmentClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.modelDevelopmentClusterId">modelDevelopmentClusterId</a></code> | <code>java.lang.String</code> | The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.nodePools">nodePools</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>></code> | node_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.orchestratorSpec">orchestratorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | orchestrator_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the ModelDevelopmentCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lustreExportConfig">lustreExportConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | lustre_export_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the ModelDevelopmentCluster. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.runtimeSpec">runtimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `modelDevelopmentClusterId`<sup>Required</sup> <a name="modelDevelopmentClusterId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.modelDevelopmentClusterId"></a>

```java
public java.lang.String getModelDevelopmentClusterId();
```

- *Type:* java.lang.String

The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name.

This value should be 1-10 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,8%7D%5Ba-z0-9%5D)?$/'. When using 'slurm_spec',
hyphens are not allowed ('/^[a-z][a-z0-9]{0,9}$/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#model_development_cluster_id GoogleVertexAiModelDevelopmentCluster#model_development_cluster_id}

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.nodePools"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterNodePools> getNodePools();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>>

node_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pools GoogleVertexAiModelDevelopmentCluster#node_pools}

---

##### `orchestratorSpec`<sup>Required</sup> <a name="orchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.orchestratorSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpec getOrchestratorSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

orchestrator_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#orchestrator_spec GoogleVertexAiModelDevelopmentCluster#orchestrator_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#deletion_policy GoogleVertexAiModelDevelopmentCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the ModelDevelopmentCluster.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#display_name GoogleVertexAiModelDevelopmentCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `lustreExportConfig`<sup>Optional</sup> <a name="lustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lustreExportConfig"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfig getLustreExportConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

lustre_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustre_export_config GoogleVertexAiModelDevelopmentCluster#lustre_export_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.network"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNetwork getNetwork();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the ModelDevelopmentCluster. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#region GoogleVertexAiModelDevelopmentCluster#region}

---

##### `runtimeSpec`<sup>Optional</sup> <a name="runtimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.runtimeSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeSpec getRuntimeSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#runtime_spec GoogleVertexAiModelDevelopmentCluster#runtime_spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.timeouts"></a>

```java
public GoogleVertexAiModelDevelopmentClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#timeouts GoogleVertexAiModelDevelopmentCluster#timeouts}

---

### GoogleVertexAiModelDevelopmentClusterLustreExportConfig <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig;

GoogleVertexAiModelDevelopmentClusterLustreExportConfig.builder()
    .destinationBucket(java.lang.String)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .lustres(java.util.List<java.lang.String>)
//  .startTime(GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.destinationBucket">destinationBucket</a></code> | <code>java.lang.String</code> | The Cloud Storage bucket that backups are written to, without the "gs://" scheme. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.lustres">lustres</a></code> | <code>java.util.List<java.lang.String></code> | The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | start_time block. |

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.destinationBucket"></a>

```java
public java.lang.String getDestinationBucket();
```

- *Type:* java.lang.String

The Cloud Storage bucket that backups are written to, without the "gs://" scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#destination_bucket GoogleVertexAiModelDevelopmentCluster#destination_bucket}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED.

If empty, a backup runs every day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#days_of_week GoogleVertexAiModelDevelopmentCluster#days_of_week}

---

##### `lustres`<sup>Optional</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.lustres"></a>

```java
public java.util.List<java.lang.String> getLustres();
```

- *Type:* java.util.List<java.lang.String>

The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}".

Every entry
must be attached to one of the cluster's node pools, and no entry may
repeat. If empty, every attached instance is backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.startTime"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#start_time GoogleVertexAiModelDevelopmentCluster#start_time}

---

### GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime;

GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#hours GoogleVertexAiModelDevelopmentCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#minutes GoogleVertexAiModelDevelopmentCluster#minutes}

---

### GoogleVertexAiModelDevelopmentClusterNetwork <a name="GoogleVertexAiModelDevelopmentClusterNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNetwork;

GoogleVertexAiModelDevelopmentClusterNetwork.builder()
    .network(java.lang.String)
//  .subnetwork(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network where to create the cluster. The 'default' network is used if not specified. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork in the above network to create the cluster. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC network where to create the cluster. The 'default' network is used if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork in the above network to create the cluster.

If not specified:

* for auto mode VPC, the subnet in corresponding region is auto-selected;
* for custom mode VPC, a new subnet will be automatically created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#subnetwork GoogleVertexAiModelDevelopmentCluster#subnetwork}

---

### GoogleVertexAiModelDevelopmentClusterNodePools <a name="GoogleVertexAiModelDevelopmentClusterNodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePools;

GoogleVertexAiModelDevelopmentClusterNodePools.builder()
    .id(java.lang.String)
    .machineSpec(GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec)
//  .bootDisk(GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk)
//  .enablePublicIps(java.lang.Boolean|IResolvable)
//  .filestores(java.util.List<java.lang.String>)
//  .flexStartMaxDuration(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lustres(java.util.List<java.lang.String>)
//  .nodeImage(java.lang.String)
//  .provisioningModel(java.lang.String)
//  .scalingSpec(GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec)
//  .startupScript(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID referring to this node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.enablePublicIps">enablePublicIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable public IPs for the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.filestores">filestores</a></code> | <code>java.util.List<java.lang.String></code> | List of the existing Filestore instances to be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.flexStartMaxDuration">flexStartMaxDuration</a></code> | <code>java.lang.String</code> | The maximum duration for instances in this node pool. This field is only applicable when 'provisioning_model' is set to 'FLEX_START'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.lustres">lustres</a></code> | <code>java.util.List<java.lang.String></code> | List of the existing Google Managed Lustre instances to be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.nodeImage">nodeImage</a></code> | <code>java.lang.String</code> | The node image to be used for the VMs in the node pool. In format of "projects//global/images/" or "projects/test-project/global/images/family/". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Specifies the provisioning model for the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.scalingSpec">scalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | scaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.startupScript">startupScript</a></code> | <code>java.lang.String</code> | Startup script for the node pool instances. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the node pool. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID referring to this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.machineSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#machine_spec GoogleVertexAiModelDevelopmentCluster#machine_spec}

---

##### `bootDisk`<sup>Optional</sup> <a name="bootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.bootDisk"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk getBootDisk();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk GoogleVertexAiModelDevelopmentCluster#boot_disk}

---

##### `enablePublicIps`<sup>Optional</sup> <a name="enablePublicIps" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.enablePublicIps"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicIps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable public IPs for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#enable_public_ips GoogleVertexAiModelDevelopmentCluster#enable_public_ips}

---

##### `filestores`<sup>Optional</sup> <a name="filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.filestores"></a>

```java
public java.util.List<java.lang.String> getFilestores();
```

- *Type:* java.util.List<java.lang.String>

List of the existing Filestore instances to be mounted.

For example:
if "projects/my-project/locations/us-central1-a/instances/my-instance" is
specified, the instance will be mounted to the node pool under the path
"mnt/filestore/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#filestores GoogleVertexAiModelDevelopmentCluster#filestores}

---

##### `flexStartMaxDuration`<sup>Optional</sup> <a name="flexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.flexStartMaxDuration"></a>

```java
public java.lang.String getFlexStartMaxDuration();
```

- *Type:* java.lang.String

The maximum duration for instances in this node pool. This field is only applicable when 'provisioning_model' is set to 'FLEX_START'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#flex_start_max_duration GoogleVertexAiModelDevelopmentCluster#flex_start_max_duration}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

```java
public java.util.List<java.lang.String> getLustres();
```

- *Type:* java.util.List<java.lang.String>

List of the existing Google Managed Lustre instances to be mounted.

Similar to the filestores, the instance will be mounted to the node pool
under the path "/mnt/lustre/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

##### `nodeImage`<sup>Optional</sup> <a name="nodeImage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.nodeImage"></a>

```java
public java.lang.String getNodeImage();
```

- *Type:* java.lang.String

The node image to be used for the VMs in the node pool. In format of "projects//global/images/" or "projects/test-project/global/images/family/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_image GoogleVertexAiModelDevelopmentCluster#node_image}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

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

##### `scalingSpec`<sup>Optional</sup> <a name="scalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.scalingSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec getScalingSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

scaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#scaling_spec GoogleVertexAiModelDevelopmentCluster#scaling_spec}

---

##### `startupScript`<sup>Optional</sup> <a name="startupScript" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.startupScript"></a>

```java
public java.lang.String getStartupScript();
```

- *Type:* java.lang.String

Startup script for the node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#startup_script GoogleVertexAiModelDevelopmentCluster#startup_script}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#zone GoogleVertexAiModelDevelopmentCluster#zone}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk;

GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.builder()
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | Type of the boot disk. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_size_gb GoogleVertexAiModelDevelopmentCluster#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_type GoogleVertexAiModelDevelopmentCluster#boot_disk_type}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec;

GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.builder()
    .machineType(java.lang.String)
//  .reservationAffinity(GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

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

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.reservationAffinity"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity GoogleVertexAiModelDevelopmentCluster#reservation_affinity}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity;

GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.builder()
    .reservationAffinityType(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.reservationAffinityType">reservationAffinityType</a></code> | <code>java.lang.String</code> | Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of a reservation resource. |

---

##### `reservationAffinityType`<sup>Required</sup> <a name="reservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```java
public java.lang.String getReservationAffinityType();
```

- *Type:* java.lang.String

Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity_type GoogleVertexAiModelDevelopmentCluster#reservation_affinity_type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of a reservation resource.

This must be the
resource name of the reservation, reservation block, or reservation sub-
block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#values GoogleVertexAiModelDevelopmentCluster#values}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec;

GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.builder()
//  .maxNodeCount(java.lang.Number)
//  .minNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | maximum size of the node pool, must be ≥ min_node_count. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | minimum size of the node pool, must be >= 0 and <= max_node_count. |

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

maximum size of the node pool, must be ≥ min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#max_node_count GoogleVertexAiModelDevelopmentCluster#max_node_count}

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

minimum size of the node pool, must be >= 0 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#min_node_count GoogleVertexAiModelDevelopmentCluster#min_node_count}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpec <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec;

GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.builder()
//  .slurmSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.property.slurmSpec">slurmSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | slurm_spec block. |

---

##### `slurmSpec`<sup>Optional</sup> <a name="slurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.property.slurmSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec getSlurmSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

slurm_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#slurm_spec GoogleVertexAiModelDevelopmentCluster#slurm_spec}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec;

GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.builder()
    .homeDirectoryStorage(java.lang.String)
    .loginNodePoolId(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultPartitionId(java.lang.String)
//  .epilogBashScripts(java.util.List<java.lang.String>)
//  .nodeSets(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets>)
//  .partitions(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions>)
//  .prologBashScripts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.homeDirectoryStorage">homeDirectoryStorage</a></code> | <code>java.lang.String</code> | Full name of the Filestore to be mounted as /home directory on every node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.loginNodePoolId">loginNodePoolId</a></code> | <code>java.lang.String</code> | The node pool id to be used as slurm login node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in slurm.conf. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.defaultPartitionId">defaultPartitionId</a></code> | <code>java.lang.String</code> | Id of the partition that Slurm jobs submitted without an explicit partition run on, for example 'sbatch' without '--partition'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.epilogBashScripts">epilogBashScripts</a></code> | <code>java.util.List<java.lang.String></code> | Custom bash scripts executed after each slurm job on every allocated node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.nodeSets">nodeSets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>></code> | node_sets block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.partitions">partitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>></code> | partitions block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.prologBashScripts">prologBashScripts</a></code> | <code>java.util.List<java.lang.String></code> | Custom bash scripts executed before each slurm job on every allocated node. |

---

##### `homeDirectoryStorage`<sup>Required</sup> <a name="homeDirectoryStorage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.homeDirectoryStorage"></a>

```java
public java.lang.String getHomeDirectoryStorage();
```

- *Type:* java.lang.String

Full name of the Filestore to be mounted as /home directory on every node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#home_directory_storage GoogleVertexAiModelDevelopmentCluster#home_directory_storage}

---

##### `loginNodePoolId`<sup>Required</sup> <a name="loginNodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.loginNodePoolId"></a>

```java
public java.lang.String getLoginNodePoolId();
```

- *Type:* java.lang.String

The node pool id to be used as slurm login node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#login_node_pool_id GoogleVertexAiModelDevelopmentCluster#login_node_pool_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

##### `defaultPartitionId`<sup>Optional</sup> <a name="defaultPartitionId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.defaultPartitionId"></a>

```java
public java.lang.String getDefaultPartitionId();
```

- *Type:* java.lang.String

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

##### `epilogBashScripts`<sup>Optional</sup> <a name="epilogBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.epilogBashScripts"></a>

```java
public java.util.List<java.lang.String> getEpilogBashScripts();
```

- *Type:* java.util.List<java.lang.String>

Custom bash scripts executed after each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#epilog_bash_scripts GoogleVertexAiModelDevelopmentCluster#epilog_bash_scripts}

---

##### `nodeSets`<sup>Optional</sup> <a name="nodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.nodeSets"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets> getNodeSets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>>

node_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_sets GoogleVertexAiModelDevelopmentCluster#node_sets}

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.partitions"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions> getPartitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>>

partitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#partitions GoogleVertexAiModelDevelopmentCluster#partitions}

---

##### `prologBashScripts`<sup>Optional</sup> <a name="prologBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.prologBashScripts"></a>

```java
public java.util.List<java.lang.String> getPrologBashScripts();
```

- *Type:* java.util.List<java.lang.String>

Custom bash scripts executed before each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#prolog_bash_scripts GoogleVertexAiModelDevelopmentCluster#prolog_bash_scripts}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets;

GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.builder()
    .nodePoolId(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.nodePoolId">nodePoolId</a></code> | <code>java.lang.String</code> | Id of the node pool these settings apply to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Node-scoped Slurm settings, emitted as additional 'Key=Value' pairs on the 'NodeName=' line for this node pool's nodes in slurm.conf. |

---

##### `nodePoolId`<sup>Required</sup> <a name="nodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.nodePoolId"></a>

```java
public java.lang.String getNodePoolId();
```

- *Type:* java.lang.String

Id of the node pool these settings apply to.

Must match the 'id' of one of
the node pools in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pool_id GoogleVertexAiModelDevelopmentCluster#node_pool_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions;

GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.builder()
    .id(java.lang.String)
    .nodePoolIds(java.util.List<java.lang.String>)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.id">id</a></code> | <code>java.lang.String</code> | Id of the slurm partiton. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.nodePoolIds">nodePoolIds</a></code> | <code>java.util.List<java.lang.String></code> | Node pools for the slurm partition. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Partition-scoped Slurm settings, emitted as additional 'Key=Value' pairs on this partition's 'PartitionName=' line in slurm.conf. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Id of the slurm partiton.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodePoolIds`<sup>Required</sup> <a name="nodePoolIds" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.nodePoolIds"></a>

```java
public java.util.List<java.lang.String> getNodePoolIds();
```

- *Type:* java.util.List<java.lang.String>

Node pools for the slurm partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pool_ids GoogleVertexAiModelDevelopmentCluster#node_pool_ids}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntime;

GoogleVertexAiModelDevelopmentClusterRuntime.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterRuntimeSpec <a name="GoogleVertexAiModelDevelopmentClusterRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec;

GoogleVertexAiModelDevelopmentClusterRuntimeSpec.builder()
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The default service account used by the cluster when running any workloads on it. |

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The default service account used by the cluster when running any workloads on it.

If not specified, the default compute engine service account will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#service_account GoogleVertexAiModelDevelopmentCluster#service_account}

---

### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices;

GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec;

GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus;

GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanager <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanager" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager;

GoogleVertexAiModelDevelopmentClusterRuntimeXmanager.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError;

GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError.builder()
    .build();
```


### GoogleVertexAiModelDevelopmentClusterTimeouts <a name="GoogleVertexAiModelDevelopmentClusterTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterTimeouts;

GoogleVertexAiModelDevelopmentClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiModelDevelopmentClusterClusterEventsList <a name="GoogleVertexAiModelDevelopmentClusterClusterEventsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList;

new GoogleVertexAiModelDevelopmentClusterClusterEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference;

new GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventMessage">eventMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventTime">eventTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents">GoogleVertexAiModelDevelopmentClusterClusterEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventMessage`<sup>Required</sup> <a name="eventMessage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventMessage"></a>

```java
public java.lang.String getEventMessage();
```

- *Type:* java.lang.String

---

##### `eventTime`<sup>Required</sup> <a name="eventTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventTime"></a>

```java
public java.lang.String getEventTime();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterEvents getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents">GoogleVertexAiModelDevelopmentClusterClusterEvents</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList;

new GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference;

new GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.details">details</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError">GoogleVertexAiModelDevelopmentClusterClusterStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError">GoogleVertexAiModelDevelopmentClusterClusterStatusError</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList;

new GoogleVertexAiModelDevelopmentClusterClusterStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.detail">detail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolId">nodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolType">nodePoolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodeState">nodeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.physicalHost">physicalHost</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.detail"></a>

```java
public java.lang.String getDetail();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `nodePoolId`<sup>Required</sup> <a name="nodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolId"></a>

```java
public java.lang.String getNodePoolId();
```

- *Type:* java.lang.String

---

##### `nodePoolType`<sup>Required</sup> <a name="nodePoolType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolType"></a>

```java
public java.lang.String getNodePoolType();
```

- *Type:* java.lang.String

---

##### `nodeState`<sup>Required</sup> <a name="nodeState" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodeState"></a>

```java
public java.lang.String getNodeState();
```

- *Type:* java.lang.String

---

##### `physicalHost`<sup>Required</sup> <a name="physicalHost" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.physicalHost"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList getPhysicalHost();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.blockId">blockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.subblockId">subblockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockId`<sup>Required</sup> <a name="blockId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.blockId"></a>

```java
public java.lang.String getBlockId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `subblockId`<sup>Required</sup> <a name="subblockId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.subblockId"></a>

```java
public java.lang.String getSubblockId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference;

new GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.detail">detail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList">GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.nodesStatus">nodesStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus">GoogleVertexAiModelDevelopmentClusterClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.detail"></a>

```java
public java.lang.String getDetail();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.error"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList">GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList</a>

---

##### `nodesStatus`<sup>Required</sup> <a name="nodesStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.nodesStatus"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList getNodesStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterClusterStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus">GoogleVertexAiModelDevelopmentClusterClusterStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference;

new GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetLustres">resetLustres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime"></a>

```java
public void putStartTime(GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetLustres` <a name="resetLustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetLustres"></a>

```java
public void resetLustres()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucketInput">destinationBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustresInput">lustresInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucket">destinationBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustres">lustres</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTime"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference</a>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationBucketInput`<sup>Optional</sup> <a name="destinationBucketInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucketInput"></a>

```java
public java.lang.String getDestinationBucketInput();
```

- *Type:* java.lang.String

---

##### `lustresInput`<sup>Optional</sup> <a name="lustresInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustresInput"></a>

```java
public java.util.List<java.lang.String> getLustresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTimeInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucket"></a>

```java
public java.lang.String getDestinationBucket();
```

- *Type:* java.lang.String

---

##### `lustres`<sup>Required</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustres"></a>

```java
public java.util.List<java.lang.String> getLustres();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---


### GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference;

new GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---


### GoogleVertexAiModelDevelopmentClusterNetworkOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNetworkOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference;

new GoogleVertexAiModelDevelopmentClusterNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNetwork getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference;

new GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskType"></a>

```java
public void resetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskTypeInput"></a>

```java
public java.lang.String getBootDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsList <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList;

new GoogleVertexAiModelDevelopmentClusterNodePoolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterNodePools> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference;

new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity"></a>

```java
public void putReservationAffinity(GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinity"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference</a>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference;

new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">reservationAffinityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">reservationAffinityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reservationAffinityTypeInput`<sup>Optional</sup> <a name="reservationAffinityTypeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```java
public java.lang.String getReservationAffinityTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservationAffinityType`<sup>Required</sup> <a name="reservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```java
public java.lang.String getReservationAffinityType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference;

new GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk">putBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec">putScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetBootDisk">resetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetEnablePublicIps">resetEnablePublicIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFilestores">resetFilestores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFlexStartMaxDuration">resetFlexStartMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLustres">resetLustres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetNodeImage">resetNodeImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetScalingSpec">resetScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetStartupScript">resetStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBootDisk` <a name="putBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk"></a>

```java
public void putBootDisk(GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec"></a>

```java
public void putMachineSpec(GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---

##### `putScalingSpec` <a name="putScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec"></a>

```java
public void putScalingSpec(GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---

##### `resetBootDisk` <a name="resetBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetBootDisk"></a>

```java
public void resetBootDisk()
```

##### `resetEnablePublicIps` <a name="resetEnablePublicIps" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetEnablePublicIps"></a>

```java
public void resetEnablePublicIps()
```

##### `resetFilestores` <a name="resetFilestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFilestores"></a>

```java
public void resetFilestores()
```

##### `resetFlexStartMaxDuration` <a name="resetFlexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFlexStartMaxDuration"></a>

```java
public void resetFlexStartMaxDuration()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLustres` <a name="resetLustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLustres"></a>

```java
public void resetLustres()
```

##### `resetNodeImage` <a name="resetNodeImage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetNodeImage"></a>

```java
public void resetNodeImage()
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetProvisioningModel"></a>

```java
public void resetProvisioningModel()
```

##### `resetScalingSpec` <a name="resetScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetScalingSpec"></a>

```java
public void resetScalingSpec()
```

##### `resetStartupScript` <a name="resetStartupScript" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetStartupScript"></a>

```java
public void resetStartupScript()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.effectiveFlexStartMaxDuration">effectiveFlexStartMaxDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpec">scalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDiskInput">bootDiskInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIpsInput">enablePublicIpsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestoresInput">filestoresInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDurationInput">flexStartMaxDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustresInput">lustresInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImageInput">nodeImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpecInput">scalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScriptInput">startupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIps">enablePublicIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestores">filestores</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDuration">flexStartMaxDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustres">lustres</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImage">nodeImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScript">startupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDisk"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference getBootDisk();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference</a>

---

##### `effectiveFlexStartMaxDuration`<sup>Required</sup> <a name="effectiveFlexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.effectiveFlexStartMaxDuration"></a>

```java
public java.lang.String getEffectiveFlexStartMaxDuration();
```

- *Type:* java.lang.String

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference</a>

---

##### `scalingSpec`<sup>Required</sup> <a name="scalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference getScalingSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference</a>

---

##### `bootDiskInput`<sup>Optional</sup> <a name="bootDiskInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDiskInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk getBootDiskInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---

##### `enablePublicIpsInput`<sup>Optional</sup> <a name="enablePublicIpsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIpsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicIpsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filestoresInput`<sup>Optional</sup> <a name="filestoresInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestoresInput"></a>

```java
public java.util.List<java.lang.String> getFilestoresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `flexStartMaxDurationInput`<sup>Optional</sup> <a name="flexStartMaxDurationInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDurationInput"></a>

```java
public java.lang.String getFlexStartMaxDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lustresInput`<sup>Optional</sup> <a name="lustresInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustresInput"></a>

```java
public java.util.List<java.lang.String> getLustresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpecInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---

##### `nodeImageInput`<sup>Optional</sup> <a name="nodeImageInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImageInput"></a>

```java
public java.lang.String getNodeImageInput();
```

- *Type:* java.lang.String

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModelInput"></a>

```java
public java.lang.String getProvisioningModelInput();
```

- *Type:* java.lang.String

---

##### `scalingSpecInput`<sup>Optional</sup> <a name="scalingSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpecInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec getScalingSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---

##### `startupScriptInput`<sup>Optional</sup> <a name="startupScriptInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScriptInput"></a>

```java
public java.lang.String getStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `enablePublicIps`<sup>Required</sup> <a name="enablePublicIps" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIps"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicIps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filestores`<sup>Required</sup> <a name="filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestores"></a>

```java
public java.util.List<java.lang.String> getFilestores();
```

- *Type:* java.util.List<java.lang.String>

---

##### `flexStartMaxDuration`<sup>Required</sup> <a name="flexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDuration"></a>

```java
public java.lang.String getFlexStartMaxDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lustres`<sup>Required</sup> <a name="lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustres"></a>

```java
public java.util.List<java.lang.String> getLustres();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodeImage`<sup>Required</sup> <a name="nodeImage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImage"></a>

```java
public java.lang.String getNodeImage();
```

- *Type:* java.lang.String

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `startupScript`<sup>Required</sup> <a name="startupScript" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScript"></a>

```java
public java.lang.String getStartupScript();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference;

new GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMaxNodeCount"></a>

```java
public void resetMaxNodeCount()
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMinNodeCount"></a>

```java
public void resetMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec">putSlurmSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resetSlurmSpec">resetSlurmSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSlurmSpec` <a name="putSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec"></a>

```java
public void putSlurmSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---

##### `resetSlurmSpec` <a name="resetSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resetSlurmSpec"></a>

```java
public void resetSlurmSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpec">slurmSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpecInput">slurmSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `slurmSpec`<sup>Required</sup> <a name="slurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference getSlurmSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference</a>

---

##### `slurmSpecInput`<sup>Optional</sup> <a name="slurmSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpecInput"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec getSlurmSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resetConfig"></a>

```java
public void resetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolIdInput">nodePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolId">nodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodePoolIdInput`<sup>Optional</sup> <a name="nodePoolIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolIdInput"></a>

```java
public java.lang.String getNodePoolIdInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodePoolId`<sup>Required</sup> <a name="nodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolId"></a>

```java
public java.lang.String getNodePoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets">putNodeSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions">putPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetDefaultPartitionId">resetDefaultPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetEpilogBashScripts">resetEpilogBashScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetNodeSets">resetNodeSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPartitions">resetPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPrologBashScripts">resetPrologBashScripts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeSets` <a name="putNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets"></a>

```java
public void putNodeSets(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>>

---

##### `putPartitions` <a name="putPartitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions"></a>

```java
public void putPartitions(IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDefaultPartitionId` <a name="resetDefaultPartitionId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetDefaultPartitionId"></a>

```java
public void resetDefaultPartitionId()
```

##### `resetEpilogBashScripts` <a name="resetEpilogBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetEpilogBashScripts"></a>

```java
public void resetEpilogBashScripts()
```

##### `resetNodeSets` <a name="resetNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetNodeSets"></a>

```java
public void resetNodeSets()
```

##### `resetPartitions` <a name="resetPartitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPartitions"></a>

```java
public void resetPartitions()
```

##### `resetPrologBashScripts` <a name="resetPrologBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPrologBashScripts"></a>

```java
public void resetPrologBashScripts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSets">nodeSets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionIdInput">defaultPartitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScriptsInput">epilogBashScriptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorageInput">homeDirectoryStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolIdInput">loginNodePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSetsInput">nodeSetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitionsInput">partitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScriptsInput">prologBashScriptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionId">defaultPartitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScripts">epilogBashScripts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorage">homeDirectoryStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolId">loginNodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScripts">prologBashScripts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeSets`<sup>Required</sup> <a name="nodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSets"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList getNodeSets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList</a>

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitions"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList getPartitions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultPartitionIdInput`<sup>Optional</sup> <a name="defaultPartitionIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionIdInput"></a>

```java
public java.lang.String getDefaultPartitionIdInput();
```

- *Type:* java.lang.String

---

##### `epilogBashScriptsInput`<sup>Optional</sup> <a name="epilogBashScriptsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScriptsInput"></a>

```java
public java.util.List<java.lang.String> getEpilogBashScriptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `homeDirectoryStorageInput`<sup>Optional</sup> <a name="homeDirectoryStorageInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorageInput"></a>

```java
public java.lang.String getHomeDirectoryStorageInput();
```

- *Type:* java.lang.String

---

##### `loginNodePoolIdInput`<sup>Optional</sup> <a name="loginNodePoolIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolIdInput"></a>

```java
public java.lang.String getLoginNodePoolIdInput();
```

- *Type:* java.lang.String

---

##### `nodeSetsInput`<sup>Optional</sup> <a name="nodeSetsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSetsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets> getNodeSetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>>

---

##### `partitionsInput`<sup>Optional</sup> <a name="partitionsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitionsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions> getPartitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>>

---

##### `prologBashScriptsInput`<sup>Optional</sup> <a name="prologBashScriptsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScriptsInput"></a>

```java
public java.util.List<java.lang.String> getPrologBashScriptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultPartitionId`<sup>Required</sup> <a name="defaultPartitionId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionId"></a>

```java
public java.lang.String getDefaultPartitionId();
```

- *Type:* java.lang.String

---

##### `epilogBashScripts`<sup>Required</sup> <a name="epilogBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScripts"></a>

```java
public java.util.List<java.lang.String> getEpilogBashScripts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `homeDirectoryStorage`<sup>Required</sup> <a name="homeDirectoryStorage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorage"></a>

```java
public java.lang.String getHomeDirectoryStorage();
```

- *Type:* java.lang.String

---

##### `loginNodePoolId`<sup>Required</sup> <a name="loginNodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolId"></a>

```java
public java.lang.String getLoginNodePoolId();
```

- *Type:* java.lang.String

---

##### `prologBashScripts`<sup>Required</sup> <a name="prologBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScripts"></a>

```java
public java.util.List<java.lang.String> getPrologBashScripts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resetConfig"></a>

```java
public void resetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIdsInput">nodePoolIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIds">nodePoolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nodePoolIdsInput`<sup>Optional</sup> <a name="nodePoolIdsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIdsInput"></a>

```java
public java.util.List<java.lang.String> getNodePoolIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nodePoolIds`<sup>Required</sup> <a name="nodePoolIds" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIds"></a>

```java
public java.util.List<java.lang.String> getNodePoolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeList;

new GoogleVertexAiModelDevelopmentClusterRuntimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.trainingServices">trainingServices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.xmanager">xmanager</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime">GoogleVertexAiModelDevelopmentClusterRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trainingServices`<sup>Required</sup> <a name="trainingServices" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.trainingServices"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList getTrainingServices();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList</a>

---

##### `xmanager`<sup>Required</sup> <a name="xmanager" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.xmanager"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList getXmanager();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime">GoogleVertexAiModelDevelopmentClusterRuntime</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodeCount">workerNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodePoolId">workerNodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workerNodeCount`<sup>Required</sup> <a name="workerNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodeCount"></a>

```java
public java.lang.Number getWorkerNodeCount();
```

- *Type:* java.lang.Number

---

##### `workerNodePoolId`<sup>Required</sup> <a name="workerNodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodePoolId"></a>

```java
public java.lang.String getWorkerNodePoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.deploymentSpec">deploymentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.serviceStatus">serviceStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deploymentSpec`<sup>Required</sup> <a name="deploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.deploymentSpec"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList getDeploymentSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList</a>

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceStatus`<sup>Required</sup> <a name="serviceStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.serviceStatus"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList getServiceStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.detail">detail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.endpoints">endpoints</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.detail"></a>

```java
public java.lang.String getDetail();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.endpoints"></a>

```java
public StringMap getEndpoints();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.details">details</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.apiEndpoint">apiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.uiEndpoint">uiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager">GoogleVertexAiModelDevelopmentClusterRuntimeXmanager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.apiEndpoint"></a>

```java
public java.lang.String getApiEndpoint();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.error"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `uiEndpoint`<sup>Required</sup> <a name="uiEndpoint" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.uiEndpoint"></a>

```java
public java.lang.String getUiEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanager getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager">GoogleVertexAiModelDevelopmentClusterRuntimeXmanager</a>

---


### GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_model_development_cluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference;

new GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiModelDevelopmentClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---



