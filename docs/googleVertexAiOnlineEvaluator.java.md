# `googleVertexAiOnlineEvaluator` Submodule <a name="`googleVertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiOnlineEvaluator <a name="GoogleVertexAiOnlineEvaluator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluator;

GoogleVertexAiOnlineEvaluator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentResource(java.lang.String)
    .cloudObservability(GoogleVertexAiOnlineEvaluatorCloudObservability)
    .config(GoogleVertexAiOnlineEvaluatorConfigA)
    .metricSources(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorMetricSources>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiOnlineEvaluatorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.agentResource">agentResource</a></code> | <code>java.lang.String</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.metricSources">metricSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>></code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.agentResource"></a>

- *Type:* java.lang.String

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#agent_resource GoogleVertexAiOnlineEvaluator#agent_resource}

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.cloudObservability"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#cloud_observability GoogleVertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#config GoogleVertexAiOnlineEvaluator#config}

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.metricSources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>>

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_sources GoogleVertexAiOnlineEvaluator#metric_sources}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#deletion_policy GoogleVertexAiOnlineEvaluator#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#display_name GoogleVertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#region GoogleVertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#timeouts GoogleVertexAiOnlineEvaluator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability">putCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources">putMetricSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudObservability` <a name="putCloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability"></a>

```java
public void putCloudObservability(GoogleVertexAiOnlineEvaluatorCloudObservability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig"></a>

```java
public void putConfig(GoogleVertexAiOnlineEvaluatorConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---

##### `putMetricSources` <a name="putMetricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources"></a>

```java
public void putMetricSources(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorMetricSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiOnlineEvaluatorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluator;

GoogleVertexAiOnlineEvaluator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluator;

GoogleVertexAiOnlineEvaluator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluator;

GoogleVertexAiOnlineEvaluator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluator;

GoogleVertexAiOnlineEvaluator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiOnlineEvaluator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiOnlineEvaluator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference">GoogleVertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSources">metricSources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList">GoogleVertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.stateDetails">stateDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList">GoogleVertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference">GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResourceInput">agentResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservabilityInput">cloudObservabilityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSourcesInput">metricSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResource">agentResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservability"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference getCloudObservability();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.config"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference">GoogleVertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSources"></a>

```java
public GoogleVertexAiOnlineEvaluatorMetricSourcesList getMetricSources();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList">GoogleVertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.stateDetails"></a>

```java
public GoogleVertexAiOnlineEvaluatorStateDetailsList getStateDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList">GoogleVertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeouts"></a>

```java
public GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference">GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `agentResourceInput`<sup>Optional</sup> <a name="agentResourceInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResourceInput"></a>

```java
public java.lang.String getAgentResourceInput();
```

- *Type:* java.lang.String

---

##### `cloudObservabilityInput`<sup>Optional</sup> <a name="cloudObservabilityInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservability getCloudObservabilityInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.configInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigA getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricSourcesInput`<sup>Optional</sup> <a name="metricSourcesInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorMetricSources> getMetricSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiOnlineEvaluatorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResource"></a>

```java
public java.lang.String getAgentResource();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiOnlineEvaluatorCloudObservability <a name="GoogleVertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservability;

GoogleVertexAiOnlineEvaluatorCloudObservability.builder()
    .openTelemetry(GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry)
//  .logView(java.lang.String)
//  .sessionScope(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope)
//  .traceScope(GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope)
//  .traceView(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.logView">logView</a></code> | <code>java.lang.String</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceView">traceView</a></code> | <code>java.lang.String</code> | Optional trace view that will be used to query traces. |

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry getOpenTelemetry();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#open_telemetry GoogleVertexAiOnlineEvaluator#open_telemetry}

---

##### `logView`<sup>Optional</sup> <a name="logView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```java
public java.lang.String getLogView();
```

- *Type:* java.lang.String

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#log_view GoogleVertexAiOnlineEvaluator#log_view}

---

##### `sessionScope`<sup>Optional</sup> <a name="sessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope getSessionScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#session_scope GoogleVertexAiOnlineEvaluator#session_scope}

---

##### `traceScope`<sup>Optional</sup> <a name="traceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope getTraceScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_scope GoogleVertexAiOnlineEvaluator#trace_scope}

---

##### `traceView`<sup>Optional</sup> <a name="traceView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```java
public java.lang.String getTraceView();
```

- *Type:* java.lang.String

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_view GoogleVertexAiOnlineEvaluator#trace_view}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;

GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.builder()
    .semconvVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">semconvVersion</a></code> | <code>java.lang.String</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```java
public java.lang.String getSemconvVersion();
```

- *Type:* java.lang.String

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#semconv_version GoogleVertexAiOnlineEvaluator#semconv_version}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.builder()
//  .filter(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter>)
//  .inactivityTrigger(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

##### `inactivityTrigger`<sup>Optional</sup> <a name="inactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger getInactivityTrigger();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#inactivity_trigger GoogleVertexAiOnlineEvaluator#inactivity_trigger}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.builder()
//  .duration(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration)
//  .modelCallErrors(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors)
//  .modelCalls(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls)
//  .toolCallErrors(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors)
//  .toolCalls(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls)
//  .totalTokenUsage(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage)
//  .userTurns(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration getDuration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}

---

##### `modelCallErrors`<sup>Optional</sup> <a name="modelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors getModelCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#model_call_errors GoogleVertexAiOnlineEvaluator#model_call_errors}

---

##### `modelCalls`<sup>Optional</sup> <a name="modelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls getModelCalls();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#model_calls GoogleVertexAiOnlineEvaluator#model_calls}

---

##### `toolCallErrors`<sup>Optional</sup> <a name="toolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors getToolCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#tool_call_errors GoogleVertexAiOnlineEvaluator#tool_call_errors}

---

##### `toolCalls`<sup>Optional</sup> <a name="toolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls getToolCalls();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#tool_calls GoogleVertexAiOnlineEvaluator#tool_calls}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}

---

##### `userTurns`<sup>Optional</sup> <a name="userTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns getUserTurns();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#user_turns GoogleVertexAiOnlineEvaluator#user_turns}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;

GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.builder()
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">threshold</a></code> | <code>java.lang.String</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#threshold GoogleVertexAiOnlineEvaluator#threshold}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope;

GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.builder()
//  .filter(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter;

GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.builder()
//  .duration(GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration)
//  .totalTokenUsage(GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration getDuration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;

GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;

GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorConfig <a name="GoogleVertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorConfig;

GoogleVertexAiOnlineEvaluatorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentResource(java.lang.String)
    .cloudObservability(GoogleVertexAiOnlineEvaluatorCloudObservability)
    .config(GoogleVertexAiOnlineEvaluatorConfigA)
    .metricSources(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorMetricSources>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiOnlineEvaluatorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.agentResource">agentResource</a></code> | <code>java.lang.String</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.metricSources">metricSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>></code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```java
public java.lang.String getAgentResource();
```

- *Type:* java.lang.String

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#agent_resource GoogleVertexAiOnlineEvaluator#agent_resource}

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservability getCloudObservability();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#cloud_observability GoogleVertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.config"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#config GoogleVertexAiOnlineEvaluator#config}

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorMetricSources> getMetricSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>>

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_sources GoogleVertexAiOnlineEvaluator#metric_sources}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#deletion_policy GoogleVertexAiOnlineEvaluator#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#display_name GoogleVertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#region GoogleVertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```java
public GoogleVertexAiOnlineEvaluatorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#timeouts GoogleVertexAiOnlineEvaluator#timeouts}

---

### GoogleVertexAiOnlineEvaluatorConfigA <a name="GoogleVertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorConfigA;

GoogleVertexAiOnlineEvaluatorConfigA.builder()
//  .maxEvaluatedSamplesPerRun(java.lang.String)
//  .randomSampling(GoogleVertexAiOnlineEvaluatorConfigRandomSampling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>java.lang.String</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `maxEvaluatedSamplesPerRun`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```java
public java.lang.String getMaxEvaluatedSamplesPerRun();
```

- *Type:* java.lang.String

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#max_evaluated_samples_per_run GoogleVertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `randomSampling`<sup>Optional</sup> <a name="randomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigRandomSampling getRandomSampling();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#random_sampling GoogleVertexAiOnlineEvaluator#random_sampling}

---

### GoogleVertexAiOnlineEvaluatorConfigRandomSampling <a name="GoogleVertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling;

GoogleVertexAiOnlineEvaluatorConfigRandomSampling.builder()
    .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#percentage GoogleVertexAiOnlineEvaluator#percentage}

---

### GoogleVertexAiOnlineEvaluatorMetricSources <a name="GoogleVertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorMetricSources;

GoogleVertexAiOnlineEvaluatorMetricSources.builder()
//  .metric(java.lang.String)
//  .metricResourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metric">metric</a></code> | <code>java.lang.String</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metricResourceName">metricResourceName</a></code> | <code>java.lang.String</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric GoogleVertexAiOnlineEvaluator#metric}

---

##### `metricResourceName`<sup>Optional</sup> <a name="metricResourceName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```java
public java.lang.String getMetricResourceName();
```

- *Type:* java.lang.String

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_resource_name GoogleVertexAiOnlineEvaluator#metric_resource_name}

---

### GoogleVertexAiOnlineEvaluatorStateDetails <a name="GoogleVertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorStateDetails;

GoogleVertexAiOnlineEvaluatorStateDetails.builder()
    .build();
```


### GoogleVertexAiOnlineEvaluatorTimeouts <a name="GoogleVertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorTimeouts;

GoogleVertexAiOnlineEvaluatorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">semconvVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">semconvVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `semconvVersionInput`<sup>Optional</sup> <a name="semconvVersionInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```java
public java.lang.String getSemconvVersionInput();
```

- *Type:* java.lang.String

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```java
public java.lang.String getSemconvVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">putOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">putSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">putTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">resetLogView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">resetSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">resetTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">resetTraceView</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenTelemetry` <a name="putOpenTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```java
public void putOpenTelemetry(GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `putSessionScope` <a name="putSessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```java
public void putSessionScope(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `putTraceScope` <a name="putTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```java
public void putTraceScope(GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `resetLogView` <a name="resetLogView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```java
public void resetLogView()
```

##### `resetSessionScope` <a name="resetSessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```java
public void resetSessionScope()
```

##### `resetTraceScope` <a name="resetTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```java
public void resetTraceScope()
```

##### `resetTraceView` <a name="resetTraceView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```java
public void resetTraceView()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">logViewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">openTelemetryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">sessionScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">traceScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">traceViewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">logView</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">traceView</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference getOpenTelemetry();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `sessionScope`<sup>Required</sup> <a name="sessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference getSessionScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `traceScope`<sup>Required</sup> <a name="traceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference getTraceScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `logViewInput`<sup>Optional</sup> <a name="logViewInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```java
public java.lang.String getLogViewInput();
```

- *Type:* java.lang.String

---

##### `openTelemetryInput`<sup>Optional</sup> <a name="openTelemetryInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry getOpenTelemetryInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `sessionScopeInput`<sup>Optional</sup> <a name="sessionScopeInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope getSessionScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `traceScopeInput`<sup>Optional</sup> <a name="traceScopeInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope getTraceScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `traceViewInput`<sup>Optional</sup> <a name="traceViewInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```java
public java.lang.String getTraceViewInput();
```

- *Type:* java.lang.String

---

##### `logView`<sup>Required</sup> <a name="logView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```java
public java.lang.String getLogView();
```

- *Type:* java.lang.String

---

##### `traceView`<sup>Required</sup> <a name="traceView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```java
public java.lang.String getTraceView();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservability getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">putModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">putModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">putToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">putToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">putUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">resetModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">resetModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">resetToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">resetToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">resetUserTurns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```java
public void putDuration(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `putModelCallErrors` <a name="putModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```java
public void putModelCallErrors(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `putModelCalls` <a name="putModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```java
public void putModelCalls(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `putToolCallErrors` <a name="putToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```java
public void putToolCallErrors(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `putToolCalls` <a name="putToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```java
public void putToolCalls(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```java
public void putTotalTokenUsage(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `putUserTurns` <a name="putUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```java
public void putUserTurns(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetModelCallErrors` <a name="resetModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```java
public void resetModelCallErrors()
```

##### `resetModelCalls` <a name="resetModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```java
public void resetModelCalls()
```

##### `resetToolCallErrors` <a name="resetToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```java
public void resetToolCallErrors()
```

##### `resetToolCalls` <a name="resetToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```java
public void resetToolCalls()
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```java
public void resetTotalTokenUsage()
```

##### `resetUserTurns` <a name="resetUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```java
public void resetUserTurns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">modelCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">modelCallsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">toolCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">toolCallsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">userTurnsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference getDuration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `modelCallErrors`<sup>Required</sup> <a name="modelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference getModelCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `modelCalls`<sup>Required</sup> <a name="modelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference getModelCalls();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `toolCallErrors`<sup>Required</sup> <a name="toolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference getToolCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `toolCalls`<sup>Required</sup> <a name="toolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference getToolCalls();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `userTurns`<sup>Required</sup> <a name="userTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference getUserTurns();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration getDurationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `modelCallErrorsInput`<sup>Optional</sup> <a name="modelCallErrorsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors getModelCallErrorsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `modelCallsInput`<sup>Optional</sup> <a name="modelCallsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls getModelCallsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `toolCallErrorsInput`<sup>Optional</sup> <a name="toolCallErrorsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors getToolCallErrorsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `toolCallsInput`<sup>Optional</sup> <a name="toolCallsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls getToolCallsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage getTotalTokenUsageInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `userTurnsInput`<sup>Optional</sup> <a name="userTurnsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns getUserTurnsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">putInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">resetInactivityTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

---

##### `putInactivityTrigger` <a name="putInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```java
public void putInactivityTrigger(GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetInactivityTrigger` <a name="resetInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```java
public void resetInactivityTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">inactivityTriggerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `inactivityTrigger`<sup>Required</sup> <a name="inactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference getInactivityTrigger();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

---

##### `inactivityTriggerInput`<sup>Optional</sup> <a name="inactivityTriggerInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger getInactivityTriggerInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```java
public void putDuration(GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```java
public void putTotalTokenUsage(GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```java
public void resetTotalTokenUsage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference getDuration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration getDurationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage getTotalTokenUsageInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference;

new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### GoogleVertexAiOnlineEvaluatorConfigAOutputReference <a name="GoogleVertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference;

new GoogleVertexAiOnlineEvaluatorConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">putRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">resetMaxEvaluatedSamplesPerRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">resetRandomSampling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRandomSampling` <a name="putRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```java
public void putRandomSampling(GoogleVertexAiOnlineEvaluatorConfigRandomSampling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `resetMaxEvaluatedSamplesPerRun` <a name="resetMaxEvaluatedSamplesPerRun" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```java
public void resetMaxEvaluatedSamplesPerRun()
```

##### `resetRandomSampling` <a name="resetRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```java
public void resetRandomSampling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">maxEvaluatedSamplesPerRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">randomSamplingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `randomSampling`<sup>Required</sup> <a name="randomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference getRandomSampling();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `maxEvaluatedSamplesPerRunInput`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRunInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```java
public java.lang.String getMaxEvaluatedSamplesPerRunInput();
```

- *Type:* java.lang.String

---

##### `randomSamplingInput`<sup>Optional</sup> <a name="randomSamplingInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigRandomSampling getRandomSamplingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `maxEvaluatedSamplesPerRun`<sup>Required</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```java
public java.lang.String getMaxEvaluatedSamplesPerRun();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigA getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---


### GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference;

new GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorConfigRandomSampling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### GoogleVertexAiOnlineEvaluatorMetricSourcesList <a name="GoogleVertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList;

new GoogleVertexAiOnlineEvaluatorMetricSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```java
public GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiOnlineEvaluatorMetricSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>>

---


### GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference;

new GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">resetMetricResourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetricResourceName` <a name="resetMetricResourceName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```java
public void resetMetricResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">metricResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">metricResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `metricResourceNameInput`<sup>Optional</sup> <a name="metricResourceNameInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```java
public java.lang.String getMetricResourceNameInput();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `metricResourceName`<sup>Required</sup> <a name="metricResourceName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```java
public java.lang.String getMetricResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiOnlineEvaluatorMetricSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>

---


### GoogleVertexAiOnlineEvaluatorStateDetailsList <a name="GoogleVertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList;

new GoogleVertexAiOnlineEvaluatorStateDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get"></a>

```java
public GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference <a name="GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference;

new GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails">GoogleVertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiOnlineEvaluatorStateDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails">GoogleVertexAiOnlineEvaluatorStateDetails</a>

---


### GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference <a name="GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_online_evaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference;

new GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiOnlineEvaluatorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---



