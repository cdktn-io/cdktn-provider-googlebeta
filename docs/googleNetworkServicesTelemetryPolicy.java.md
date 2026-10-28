# `googleNetworkServicesTelemetryPolicy` Submodule <a name="`googleNetworkServicesTelemetryPolicy` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTelemetryPolicy <a name="GoogleNetworkServicesTelemetryPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicy;

GoogleNetworkServicesTelemetryPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .telemetryTarget(GoogleNetworkServicesTelemetryPolicyTelemetryTarget)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .metricsConfiguration(GoogleNetworkServicesTelemetryPolicyMetricsConfiguration)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesTelemetryPolicyTimeouts)
//  .tracingConfiguration(GoogleNetworkServicesTelemetryPolicyTracingConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.telemetryTarget">telemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `telemetryTarget`<sup>Required</sup> <a name="telemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.telemetryTarget"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="metricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.metricsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.tracingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration">putMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget">putTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration">putTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration">resetMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration">resetTracingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricsConfiguration` <a name="putMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration"></a>

```java
public void putMetricsConfiguration(GoogleNetworkServicesTelemetryPolicyMetricsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `putTelemetryTarget` <a name="putTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget"></a>

```java
public void putTelemetryTarget(GoogleNetworkServicesTelemetryPolicyTelemetryTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesTelemetryPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `putTracingConfiguration` <a name="putTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration"></a>

```java
public void putTracingConfiguration(GoogleNetworkServicesTelemetryPolicyTracingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMetricsConfiguration` <a name="resetMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration"></a>

```java
public void resetMetricsConfiguration()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTracingConfiguration` <a name="resetTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration"></a>

```java
public void resetTracingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicy;

GoogleNetworkServicesTelemetryPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicy;

GoogleNetworkServicesTelemetryPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicy;

GoogleNetworkServicesTelemetryPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicy;

GoogleNetworkServicesTelemetryPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesTelemetryPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesTelemetryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesTelemetryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTelemetryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget">telemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput">metricsConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput">telemetryTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput">tracingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `metricsConfiguration`<sup>Required</sup> <a name="metricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration"></a>

```java
public GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference getMetricsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a>

---

##### `telemetryTarget`<sup>Required</sup> <a name="telemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference getTelemetryTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference getTracingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metricsConfigurationInput`<sup>Optional</sup> <a name="metricsConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput"></a>

```java
public GoogleNetworkServicesTelemetryPolicyMetricsConfiguration getMetricsConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `telemetryTargetInput`<sup>Optional</sup> <a name="telemetryTargetInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTelemetryTarget getTelemetryTargetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesTelemetryPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `tracingConfigurationInput`<sup>Optional</sup> <a name="tracingConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfiguration getTracingConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTelemetryPolicyConfig <a name="GoogleNetworkServicesTelemetryPolicyConfig" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyConfig;

GoogleNetworkServicesTelemetryPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .telemetryTarget(GoogleNetworkServicesTelemetryPolicyTelemetryTarget)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .metricsConfiguration(GoogleNetworkServicesTelemetryPolicyMetricsConfiguration)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesTelemetryPolicyTimeouts)
//  .tracingConfiguration(GoogleNetworkServicesTelemetryPolicyTracingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget">telemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `telemetryTarget`<sup>Required</sup> <a name="telemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTelemetryTarget getTelemetryTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="metricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration"></a>

```java
public GoogleNetworkServicesTelemetryPolicyMetricsConfiguration getMetricsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfiguration getTracingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

### GoogleNetworkServicesTelemetryPolicyMetricsConfiguration <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration;

GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

### GoogleNetworkServicesTelemetryPolicyTelemetryTarget <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget;

GoogleNetworkServicesTelemetryPolicyTelemetryTarget.builder()
    .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Lists references to the resources that are targeted by the policy. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Lists references to the resources that are targeted by the policy.

Types of resources supported:

* 'run.googleapis.com/'
* 'compute.googleapis.com/'
* 'networkservices.googleapis.com/'
  The format must be the full resource name of a supported resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}

---

### GoogleNetworkServicesTelemetryPolicyTimeouts <a name="GoogleNetworkServicesTelemetryPolicyTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTimeouts;

GoogleNetworkServicesTelemetryPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}.

---

### GoogleNetworkServicesTelemetryPolicyTracingConfiguration <a name="GoogleNetworkServicesTelemetryPolicyTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration;

GoogleNetworkServicesTelemetryPolicyTracingConfiguration.builder()
//  .customSpanAttributes(IResolvable|java.util.List<GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes>)
//  .parentBasedSampling(GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling)
//  .samplingRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes">customSpanAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>></code> | custom_span_attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling">parentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | parent_based_sampling block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | Specifies the tracing sampling rate. |

---

##### `customSpanAttributes`<sup>Optional</sup> <a name="customSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes> getCustomSpanAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>>

custom_span_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}

---

##### `parentBasedSampling`<sup>Optional</sup> <a name="parentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling getParentBasedSampling();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

parent_based_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

Specifies the tracing sampling rate.

The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes;

GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.builder()
    .attributeName(java.lang.String)
//  .fromHeaderValue(java.lang.String)
//  .literalValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue">fromHeaderValue</a></code> | <code>java.lang.String</code> | Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue">literalValue</a></code> | <code>java.lang.String</code> | Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName. |

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#attribute_name GoogleNetworkServicesTelemetryPolicy#attribute_name}

---

##### `fromHeaderValue`<sup>Optional</sup> <a name="fromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue"></a>

```java
public java.lang.String getFromHeaderValue();
```

- *Type:* java.lang.String

Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted.

Mutually exclusive with literalValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#from_header_value GoogleNetworkServicesTelemetryPolicy#from_header_value}

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue"></a>

```java
public java.lang.String getLiteralValue();
```

- *Type:* java.lang.String

Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName.

Mutually exclusive with fromHeaderValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#literal_value GoogleNetworkServicesTelemetryPolicy#literal_value}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling;

GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .samplingRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference;

new GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesTelemetryPolicyMetricsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference;

new GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTelemetryTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---


### GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference;

new GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesTelemetryPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue">resetFromHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromHeaderValue` <a name="resetFromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue"></a>

```java
public void resetFromHeaderValue()
```

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue"></a>

```java
public void resetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput">fromHeaderValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput">literalValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue">fromHeaderValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue">literalValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `fromHeaderValueInput`<sup>Optional</sup> <a name="fromHeaderValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput"></a>

```java
public java.lang.String getFromHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput"></a>

```java
public java.lang.String getLiteralValueInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `fromHeaderValue`<sup>Required</sup> <a name="fromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue"></a>

```java
public java.lang.String getFromHeaderValue();
```

- *Type:* java.lang.String

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue"></a>

```java
public java.lang.String getLiteralValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes">putCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling">putParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes">resetCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling">resetParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomSpanAttributes` <a name="putCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes"></a>

```java
public void putCustomSpanAttributes(IResolvable|java.util.List<GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>>

---

##### `putParentBasedSampling` <a name="putParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling"></a>

```java
public void putParentBasedSampling(GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `resetCustomSpanAttributes` <a name="resetCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes"></a>

```java
public void resetCustomSpanAttributes()
```

##### `resetParentBasedSampling` <a name="resetParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling"></a>

```java
public void resetParentBasedSampling()
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate"></a>

```java
public void resetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes">customSpanAttributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling">parentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput">customSpanAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput">parentBasedSamplingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSpanAttributes`<sup>Required</sup> <a name="customSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList getCustomSpanAttributes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a>

---

##### `parentBasedSampling`<sup>Required</sup> <a name="parentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference getParentBasedSampling();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a>

---

##### `customSpanAttributesInput`<sup>Optional</sup> <a name="customSpanAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes> getCustomSpanAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>>

---

##### `parentBasedSamplingInput`<sup>Optional</sup> <a name="parentBasedSamplingInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling getParentBasedSamplingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput"></a>

```java
public java.lang.Number getSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_telemetry_policy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate"></a>

```java
public void resetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput"></a>

```java
public java.lang.Number getSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---



