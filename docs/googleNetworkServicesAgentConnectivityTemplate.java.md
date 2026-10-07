# `googleNetworkServicesAgentConnectivityTemplate` Submodule <a name="`googleNetworkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentConnectivityTemplate <a name="GoogleNetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplate;

GoogleNetworkServicesAgentConnectivityTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPath(java.lang.String)
    .agentConnectivityTemplateId(java.lang.String)
    .location(java.lang.String)
//  .accessTypes(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .egressNetworkConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesAgentConnectivityTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath">accessPath</a></code> | <code>java.lang.String</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>java.lang.String</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes">accessTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath"></a>

- *Type:* java.lang.String

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_path GoogleNetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId"></a>

- *Type:* java.lang.String

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#agent_connectivity_template_id GoogleNetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#location GoogleNetworkServicesAgentConnectivityTemplate#location}

---

##### `accessTypes`<sup>Optional</sup> <a name="accessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes"></a>

- *Type:* java.util.List<java.lang.String>

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_types GoogleNetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#deletion_policy GoogleNetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#description GoogleNetworkServicesAgentConnectivityTemplate#description}

---

##### `egressNetworkConfig`<sup>Optional</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#egress_network_config GoogleNetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#labels GoogleNetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#timeouts GoogleNetworkServicesAgentConnectivityTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">putEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes">resetAccessTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">resetEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressNetworkConfig` <a name="putEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```java
public void putEgressNetworkConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesAgentConnectivityTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `resetAccessTypes` <a name="resetAccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```java
public void resetAccessTypes()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEgressNetworkConfig` <a name="resetEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```java
public void resetEgressNetworkConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplate;

GoogleNetworkServicesAgentConnectivityTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplate;

GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplate;

GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplate;

GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesAgentConnectivityTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput">accessPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput">accessTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">agentConnectivityTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">egressNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath">accessPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes">accessTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `egressNetworkConfig`<sup>Required</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference getEgressNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessPathInput`<sup>Optional</sup> <a name="accessPathInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```java
public java.lang.String getAccessPathInput();
```

- *Type:* java.lang.String

---

##### `accessTypesInput`<sup>Optional</sup> <a name="accessTypesInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```java
public java.util.List<java.lang.String> getAccessTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentConnectivityTemplateIdInput`<sup>Optional</sup> <a name="agentConnectivityTemplateIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```java
public java.lang.String getAgentConnectivityTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `egressNetworkConfigInput`<sup>Optional</sup> <a name="egressNetworkConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig getEgressNetworkConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesAgentConnectivityTemplateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```java
public java.lang.String getAccessPath();
```

- *Type:* java.lang.String

---

##### `accessTypes`<sup>Required</sup> <a name="accessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```java
public java.util.List<java.lang.String> getAccessTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```java
public java.lang.String getAgentConnectivityTemplateId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentConnectivityTemplateConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateConfig;

GoogleNetworkServicesAgentConnectivityTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPath(java.lang.String)
    .agentConnectivityTemplateId(java.lang.String)
    .location(java.lang.String)
//  .accessTypes(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .egressNetworkConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesAgentConnectivityTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath">accessPath</a></code> | <code>java.lang.String</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>java.lang.String</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">accessTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```java
public java.lang.String getAccessPath();
```

- *Type:* java.lang.String

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_path GoogleNetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```java
public java.lang.String getAgentConnectivityTemplateId();
```

- *Type:* java.lang.String

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#agent_connectivity_template_id GoogleNetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#location GoogleNetworkServicesAgentConnectivityTemplate#location}

---

##### `accessTypes`<sup>Optional</sup> <a name="accessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```java
public java.util.List<java.lang.String> getAccessTypes();
```

- *Type:* java.util.List<java.lang.String>

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_types GoogleNetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#deletion_policy GoogleNetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#description GoogleNetworkServicesAgentConnectivityTemplate#description}

---

##### `egressNetworkConfig`<sup>Optional</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig getEgressNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#egress_network_config GoogleNetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#labels GoogleNetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#timeouts GoogleNetworkServicesAgentConnectivityTemplate#timeouts}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig;

GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.builder()
//  .dnsPeeringConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig)
//  .networkAttachment(java.lang.String)
//  .tlsConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig)
//  .vpcEgress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">vpcEgress</a></code> | <code>java.lang.String</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `dnsPeeringConfig`<sup>Optional</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig getDnsPeeringConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#dns_peering_config GoogleNetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#network_attachment GoogleNetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#tls_config GoogleNetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `vpcEgress`<sup>Optional</sup> <a name="vpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```java
public java.lang.String getVpcEgress();
```

- *Type:* java.lang.String

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#vpc_egress GoogleNetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig;

GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.builder()
    .targetNetwork(java.lang.String)
//  .domain(java.lang.String)
//  .domains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The list of domain names to peer for DNS resolution. |

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#target_network GoogleNetworkServicesAgentConnectivityTemplate#target_network}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domain GoogleNetworkServicesAgentConnectivityTemplate#domain}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domains GoogleNetworkServicesAgentConnectivityTemplate#domains}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig;

GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.builder()
    .additionalRoots(java.lang.String)
//  .trustConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">additionalRoots</a></code> | <code>java.lang.String</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `additionalRoots`<sup>Required</sup> <a name="additionalRoots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```java
public java.lang.String getAdditionalRoots();
```

- *Type:* java.lang.String

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#additional_roots GoogleNetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#trust_config GoogleNetworkServicesAgentConnectivityTemplate#trust_config}

---

### GoogleNetworkServicesAgentConnectivityTemplateTimeouts <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateTimeouts;

GoogleNetworkServicesAgentConnectivityTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">resetDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomains` <a name="resetDomains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```java
public void resetDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```java
public java.lang.String getTargetNetworkInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">putDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">resetDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">resetVpcEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfig` <a name="putDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```java
public void putDnsPeeringConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `resetDnsPeeringConfig` <a name="resetDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```java
public void resetDnsPeeringConfig()
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

##### `resetVpcEgress` <a name="resetVpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```java
public void resetVpcEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">dnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">vpcEgressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">vpcEgress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsPeeringConfig`<sup>Required</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference getDnsPeeringConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `dnsPeeringConfigInput`<sup>Optional</sup> <a name="dnsPeeringConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig getDnsPeeringConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `vpcEgressInput`<sup>Optional</sup> <a name="vpcEgressInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```java
public java.lang.String getVpcEgressInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `vpcEgress`<sup>Required</sup> <a name="vpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```java
public java.lang.String getVpcEgress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```java
public void resetTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">additionalRootsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">trustConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">additionalRoots</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalRootsInput`<sup>Optional</sup> <a name="additionalRootsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```java
public java.lang.String getAdditionalRootsInput();
```

- *Type:* java.lang.String

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```java
public java.lang.String getTrustConfigInput();
```

- *Type:* java.lang.String

---

##### `additionalRoots`<sup>Required</sup> <a name="additionalRoots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```java
public java.lang.String getAdditionalRoots();
```

- *Type:* java.lang.String

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_connectivity_template.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference;

new GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesAgentConnectivityTemplateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---



