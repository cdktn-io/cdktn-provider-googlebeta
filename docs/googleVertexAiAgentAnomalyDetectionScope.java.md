# `googleVertexAiAgentAnomalyDetectionScope` Submodule <a name="`googleVertexAiAgentAnomalyDetectionScope` Submodule" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiAgentAnomalyDetectionScope <a name="GoogleVertexAiAgentAnomalyDetectionScope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope google_vertex_ai_agent_anomaly_detection_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScope;

GoogleVertexAiAgentAnomalyDetectionScope.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentAnomalyDetectionScopeId(java.lang.String)
    .logBuckets(java.util.List<java.lang.String>)
    .observabilityBuckets(java.util.List<java.lang.String>)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVertexAiAgentAnomalyDetectionScopeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.agentAnomalyDetectionScopeId">agentAnomalyDetectionScopeId</a></code> | <code>java.lang.String</code> | The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.logBuckets">logBuckets</a></code> | <code>java.util.List<java.lang.String></code> | Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.observabilityBuckets">observabilityBuckets</a></code> | <code>java.util.List<java.lang.String></code> | Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the AgentAnomalyDetectionScope, e.g. us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User provided display name of the AgentAnomalyDetectionScope. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentAnomalyDetectionScopeId`<sup>Required</sup> <a name="agentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.agentAnomalyDetectionScopeId"></a>

- *Type:* java.lang.String

The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name.

This value should be 1-63
characters and valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}

---

##### `logBuckets`<sup>Required</sup> <a name="logBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.logBuckets"></a>

- *Type:* java.util.List<java.lang.String>

Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}

---

##### `observabilityBuckets`<sup>Required</sup> <a name="observabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.observabilityBuckets"></a>

- *Type:* java.util.List<java.lang.String>

Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the AgentAnomalyDetectionScope, e.g. us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User provided display name of the AgentAnomalyDetectionScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiAgentAnomalyDetectionScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScope;

GoogleVertexAiAgentAnomalyDetectionScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScope;

GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScope;

GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScope;

GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiAgentAnomalyDetectionScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiAgentAnomalyDetectionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiAgentAnomalyDetectionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput">agentAnomalyDetectionScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput">logBucketsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput">observabilityBucketsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId">agentAnomalyDetectionScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets">logBuckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets">observabilityBuckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts"></a>

```java
public GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a>

---

##### `agentAnomalyDetectionScopeIdInput`<sup>Optional</sup> <a name="agentAnomalyDetectionScopeIdInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput"></a>

```java
public java.lang.String getAgentAnomalyDetectionScopeIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logBucketsInput`<sup>Optional</sup> <a name="logBucketsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput"></a>

```java
public java.util.List<java.lang.String> getLogBucketsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `observabilityBucketsInput`<sup>Optional</sup> <a name="observabilityBucketsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput"></a>

```java
public java.util.List<java.lang.String> getObservabilityBucketsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiAgentAnomalyDetectionScopeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `agentAnomalyDetectionScopeId`<sup>Required</sup> <a name="agentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId"></a>

```java
public java.lang.String getAgentAnomalyDetectionScopeId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logBuckets`<sup>Required</sup> <a name="logBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets"></a>

```java
public java.util.List<java.lang.String> getLogBuckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `observabilityBuckets`<sup>Required</sup> <a name="observabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets"></a>

```java
public java.util.List<java.lang.String> getObservabilityBuckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeConfig <a name="GoogleVertexAiAgentAnomalyDetectionScopeConfig" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScopeConfig;

GoogleVertexAiAgentAnomalyDetectionScopeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentAnomalyDetectionScopeId(java.lang.String)
    .logBuckets(java.util.List<java.lang.String>)
    .observabilityBuckets(java.util.List<java.lang.String>)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVertexAiAgentAnomalyDetectionScopeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId">agentAnomalyDetectionScopeId</a></code> | <code>java.lang.String</code> | The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets">logBuckets</a></code> | <code>java.util.List<java.lang.String></code> | Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets">observabilityBuckets</a></code> | <code>java.util.List<java.lang.String></code> | Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the AgentAnomalyDetectionScope, e.g. us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User provided display name of the AgentAnomalyDetectionScope. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentAnomalyDetectionScopeId`<sup>Required</sup> <a name="agentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId"></a>

```java
public java.lang.String getAgentAnomalyDetectionScopeId();
```

- *Type:* java.lang.String

The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name.

This value should be 1-63
characters and valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}

---

##### `logBuckets`<sup>Required</sup> <a name="logBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets"></a>

```java
public java.util.List<java.lang.String> getLogBuckets();
```

- *Type:* java.util.List<java.lang.String>

Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}

---

##### `observabilityBuckets`<sup>Required</sup> <a name="observabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets"></a>

```java
public java.util.List<java.lang.String> getObservabilityBuckets();
```

- *Type:* java.util.List<java.lang.String>

Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the AgentAnomalyDetectionScope, e.g. us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User provided display name of the AgentAnomalyDetectionScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts"></a>

```java
public GoogleVertexAiAgentAnomalyDetectionScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}

---

### GoogleVertexAiAgentAnomalyDetectionScopeTimeouts <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts;

GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_agent_anomaly_detection_scope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference;

new GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiAgentAnomalyDetectionScopeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---



