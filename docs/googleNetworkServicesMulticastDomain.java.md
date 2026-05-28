# `googleNetworkServicesMulticastDomain` Submodule <a name="`googleNetworkServicesMulticastDomain` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastDomain <a name="GoogleNetworkServicesMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain google_network_services_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomain;

GoogleNetworkServicesMulticastDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .adminNetwork(java.lang.String)
    .connectionConfig(GoogleNetworkServicesMulticastDomainConnectionConfig)
    .location(java.lang.String)
    .multicastDomainId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .multicastDomainGroup(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesMulticastDomainTimeouts)
//  .ullMulticastDomain(GoogleNetworkServicesMulticastDomainUllMulticastDomain)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.adminNetwork">adminNetwork</a></code> | <code>java.lang.String</code> | The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.connectionConfig">connectionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | connection_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.multicastDomainId">multicastDomainId</a></code> | <code>java.lang.String</code> | A unique name for the multicast domain. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast domain. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#id GoogleNetworkServicesMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.multicastDomainGroup">multicastDomainGroup</a></code> | <code>java.lang.String</code> | The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#project GoogleNetworkServicesMulticastDomain#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.ullMulticastDomain">ullMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | ull_multicast_domain block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminNetwork`<sup>Required</sup> <a name="adminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.adminNetwork"></a>

- *Type:* java.lang.String

The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#admin_network GoogleNetworkServicesMulticastDomain#admin_network}

---

##### `connectionConfig`<sup>Required</sup> <a name="connectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.connectionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#connection_config GoogleNetworkServicesMulticastDomain#connection_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#location GoogleNetworkServicesMulticastDomain#location}

---

##### `multicastDomainId`<sup>Required</sup> <a name="multicastDomainId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.multicastDomainId"></a>

- *Type:* java.lang.String

A unique name for the multicast domain.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#multicast_domain_id GoogleNetworkServicesMulticastDomain#multicast_domain_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#deletion_policy GoogleNetworkServicesMulticastDomain#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional text description of the multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#description GoogleNetworkServicesMulticastDomain#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#id GoogleNetworkServicesMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#labels GoogleNetworkServicesMulticastDomain#labels}

---

##### `multicastDomainGroup`<sup>Optional</sup> <a name="multicastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.multicastDomainGroup"></a>

- *Type:* java.lang.String

The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#multicast_domain_group GoogleNetworkServicesMulticastDomain#multicast_domain_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#project GoogleNetworkServicesMulticastDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#timeouts GoogleNetworkServicesMulticastDomain#timeouts}

---

##### `ullMulticastDomain`<sup>Optional</sup> <a name="ullMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.Initializer.parameter.ullMulticastDomain"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

ull_multicast_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#ull_multicast_domain GoogleNetworkServicesMulticastDomain#ull_multicast_domain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putConnectionConfig">putConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putUllMulticastDomain">putUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetMulticastDomainGroup">resetMulticastDomainGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetUllMulticastDomain">resetUllMulticastDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionConfig` <a name="putConnectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putConnectionConfig"></a>

```java
public void putConnectionConfig(GoogleNetworkServicesMulticastDomainConnectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putConnectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesMulticastDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

---

##### `putUllMulticastDomain` <a name="putUllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putUllMulticastDomain"></a>

```java
public void putUllMulticastDomain(GoogleNetworkServicesMulticastDomainUllMulticastDomain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.putUllMulticastDomain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMulticastDomainGroup` <a name="resetMulticastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetMulticastDomainGroup"></a>

```java
public void resetMulticastDomainGroup()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUllMulticastDomain` <a name="resetUllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.resetUllMulticastDomain"></a>

```java
public void resetUllMulticastDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomain;

GoogleNetworkServicesMulticastDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomain;

GoogleNetworkServicesMulticastDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomain;

GoogleNetworkServicesMulticastDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomain;

GoogleNetworkServicesMulticastDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesMulticastDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesMulticastDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesMulticastDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfig">connectionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference">GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList">GoogleNetworkServicesMulticastDomainStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomain">ullMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference">GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetworkInput">adminNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfigInput">connectionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroupInput">multicastDomainGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainIdInput">multicastDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomainInput">ullMulticastDomainInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetwork">adminNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroup">multicastDomainGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainId">multicastDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionConfig`<sup>Required</sup> <a name="connectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfig"></a>

```java
public GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference getConnectionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference">GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.state"></a>

```java
public GoogleNetworkServicesMulticastDomainStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList">GoogleNetworkServicesMulticastDomainStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeouts"></a>

```java
public GoogleNetworkServicesMulticastDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainTimeoutsOutputReference</a>

---

##### `ullMulticastDomain`<sup>Required</sup> <a name="ullMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomain"></a>

```java
public GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference getUllMulticastDomain();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference">GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `adminNetworkInput`<sup>Optional</sup> <a name="adminNetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetworkInput"></a>

```java
public java.lang.String getAdminNetworkInput();
```

- *Type:* java.lang.String

---

##### `connectionConfigInput`<sup>Optional</sup> <a name="connectionConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.connectionConfigInput"></a>

```java
public GoogleNetworkServicesMulticastDomainConnectionConfig getConnectionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multicastDomainGroupInput`<sup>Optional</sup> <a name="multicastDomainGroupInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroupInput"></a>

```java
public java.lang.String getMulticastDomainGroupInput();
```

- *Type:* java.lang.String

---

##### `multicastDomainIdInput`<sup>Optional</sup> <a name="multicastDomainIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainIdInput"></a>

```java
public java.lang.String getMulticastDomainIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesMulticastDomainTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

---

##### `ullMulticastDomainInput`<sup>Optional</sup> <a name="ullMulticastDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.ullMulticastDomainInput"></a>

```java
public GoogleNetworkServicesMulticastDomainUllMulticastDomain getUllMulticastDomainInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `adminNetwork`<sup>Required</sup> <a name="adminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.adminNetwork"></a>

```java
public java.lang.String getAdminNetwork();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multicastDomainGroup`<sup>Required</sup> <a name="multicastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainGroup"></a>

```java
public java.lang.String getMulticastDomainGroup();
```

- *Type:* java.lang.String

---

##### `multicastDomainId`<sup>Required</sup> <a name="multicastDomainId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.multicastDomainId"></a>

```java
public java.lang.String getMulticastDomainId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastDomainConfig <a name="GoogleNetworkServicesMulticastDomainConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainConfig;

GoogleNetworkServicesMulticastDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .adminNetwork(java.lang.String)
    .connectionConfig(GoogleNetworkServicesMulticastDomainConnectionConfig)
    .location(java.lang.String)
    .multicastDomainId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .multicastDomainGroup(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesMulticastDomainTimeouts)
//  .ullMulticastDomain(GoogleNetworkServicesMulticastDomainUllMulticastDomain)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.adminNetwork">adminNetwork</a></code> | <code>java.lang.String</code> | The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connectionConfig">connectionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | connection_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainId">multicastDomainId</a></code> | <code>java.lang.String</code> | A unique name for the multicast domain. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast domain. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#id GoogleNetworkServicesMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainGroup">multicastDomainGroup</a></code> | <code>java.lang.String</code> | The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#project GoogleNetworkServicesMulticastDomain#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.ullMulticastDomain">ullMulticastDomain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | ull_multicast_domain block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminNetwork`<sup>Required</sup> <a name="adminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.adminNetwork"></a>

```java
public java.lang.String getAdminNetwork();
```

- *Type:* java.lang.String

The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#admin_network GoogleNetworkServicesMulticastDomain#admin_network}

---

##### `connectionConfig`<sup>Required</sup> <a name="connectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.connectionConfig"></a>

```java
public GoogleNetworkServicesMulticastDomainConnectionConfig getConnectionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#connection_config GoogleNetworkServicesMulticastDomain#connection_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#location GoogleNetworkServicesMulticastDomain#location}

---

##### `multicastDomainId`<sup>Required</sup> <a name="multicastDomainId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainId"></a>

```java
public java.lang.String getMulticastDomainId();
```

- *Type:* java.lang.String

A unique name for the multicast domain.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#multicast_domain_id GoogleNetworkServicesMulticastDomain#multicast_domain_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#deletion_policy GoogleNetworkServicesMulticastDomain#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional text description of the multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#description GoogleNetworkServicesMulticastDomain#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#id GoogleNetworkServicesMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#labels GoogleNetworkServicesMulticastDomain#labels}

---

##### `multicastDomainGroup`<sup>Optional</sup> <a name="multicastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.multicastDomainGroup"></a>

```java
public java.lang.String getMulticastDomainGroup();
```

- *Type:* java.lang.String

The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#multicast_domain_group GoogleNetworkServicesMulticastDomain#multicast_domain_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#project GoogleNetworkServicesMulticastDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesMulticastDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#timeouts GoogleNetworkServicesMulticastDomain#timeouts}

---

##### `ullMulticastDomain`<sup>Optional</sup> <a name="ullMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConfig.property.ullMulticastDomain"></a>

```java
public GoogleNetworkServicesMulticastDomainUllMulticastDomain getUllMulticastDomain();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

ull_multicast_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#ull_multicast_domain GoogleNetworkServicesMulticastDomain#ull_multicast_domain}

---

### GoogleNetworkServicesMulticastDomainConnectionConfig <a name="GoogleNetworkServicesMulticastDomainConnectionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainConnectionConfig;

GoogleNetworkServicesMulticastDomainConnectionConfig.builder()
    .connectionType(java.lang.String)
//  .nccHub(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | The VPC connection type. Possible values: NCC SAME_VPC. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.nccHub">nccHub</a></code> | <code>java.lang.String</code> | The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'. |

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

The VPC connection type. Possible values: NCC SAME_VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#connection_type GoogleNetworkServicesMulticastDomain#connection_type}

---

##### `nccHub`<sup>Optional</sup> <a name="nccHub" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig.property.nccHub"></a>

```java
public java.lang.String getNccHub();
```

- *Type:* java.lang.String

The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#ncc_hub GoogleNetworkServicesMulticastDomain#ncc_hub}

---

### GoogleNetworkServicesMulticastDomainState <a name="GoogleNetworkServicesMulticastDomainState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainState;

GoogleNetworkServicesMulticastDomainState.builder()
    .build();
```


### GoogleNetworkServicesMulticastDomainTimeouts <a name="GoogleNetworkServicesMulticastDomainTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainTimeouts;

GoogleNetworkServicesMulticastDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#create GoogleNetworkServicesMulticastDomain#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#delete GoogleNetworkServicesMulticastDomain#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#update GoogleNetworkServicesMulticastDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#create GoogleNetworkServicesMulticastDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#delete GoogleNetworkServicesMulticastDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#update GoogleNetworkServicesMulticastDomain#update}.

---

### GoogleNetworkServicesMulticastDomainUllMulticastDomain <a name="GoogleNetworkServicesMulticastDomainUllMulticastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainUllMulticastDomain;

GoogleNetworkServicesMulticastDomainUllMulticastDomain.builder()
//  .preconfiguredUllDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain">preconfiguredUllDomain</a></code> | <code>java.lang.String</code> | The preconfigured Ultra-Low-Latency domain name. |

---

##### `preconfiguredUllDomain`<sup>Optional</sup> <a name="preconfiguredUllDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain"></a>

```java
public java.lang.String getPreconfiguredUllDomain();
```

- *Type:* java.lang.String

The preconfigured Ultra-Low-Latency domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain#preconfigured_ull_domain GoogleNetworkServicesMulticastDomain#preconfigured_ull_domain}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference <a name="GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference;

new GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub">resetNccHub</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNccHub` <a name="resetNccHub" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub"></a>

```java
public void resetNccHub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput">nccHubInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub">nccHub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `nccHubInput`<sup>Optional</sup> <a name="nccHubInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput"></a>

```java
public java.lang.String getNccHubInput();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `nccHub`<sup>Required</sup> <a name="nccHub" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub"></a>

```java
public java.lang.String getNccHub();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesMulticastDomainConnectionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainConnectionConfig">GoogleNetworkServicesMulticastDomainConnectionConfig</a>

---


### GoogleNetworkServicesMulticastDomainStateList <a name="GoogleNetworkServicesMulticastDomainStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainStateList;

new GoogleNetworkServicesMulticastDomainStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.get"></a>

```java
public GoogleNetworkServicesMulticastDomainStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkServicesMulticastDomainStateOutputReference <a name="GoogleNetworkServicesMulticastDomainStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainStateOutputReference;

new GoogleNetworkServicesMulticastDomainStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState">GoogleNetworkServicesMulticastDomainState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainStateOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesMulticastDomainState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainState">GoogleNetworkServicesMulticastDomainState</a>

---


### GoogleNetworkServicesMulticastDomainTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastDomainTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference;

new GoogleNetworkServicesMulticastDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesMulticastDomainTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainTimeouts">GoogleNetworkServicesMulticastDomainTimeouts</a>

---


### GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference <a name="GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_domain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference;

new GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain">resetPreconfiguredUllDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreconfiguredUllDomain` <a name="resetPreconfiguredUllDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain"></a>

```java
public void resetPreconfiguredUllDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput">preconfiguredUllDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain">preconfiguredUllDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preconfiguredUllDomainInput`<sup>Optional</sup> <a name="preconfiguredUllDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput"></a>

```java
public java.lang.String getPreconfiguredUllDomainInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredUllDomain`<sup>Required</sup> <a name="preconfiguredUllDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain"></a>

```java
public java.lang.String getPreconfiguredUllDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesMulticastDomainUllMulticastDomain getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomain.GoogleNetworkServicesMulticastDomainUllMulticastDomain">GoogleNetworkServicesMulticastDomainUllMulticastDomain</a>

---



