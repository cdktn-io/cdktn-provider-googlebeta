# `googleNetworkServicesMulticastGroupProducerActivation` Submodule <a name="`googleNetworkServicesMulticastGroupProducerActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastGroupProducerActivation <a name="GoogleNetworkServicesMulticastGroupProducerActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation google_network_services_multicast_group_producer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivation;

GoogleNetworkServicesMulticastGroupProducerActivation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastGroupProducerActivationId(java.lang.String)
    .multicastGroupRangeActivation(java.lang.String)
    .multicastProducerAssociation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesMulticastGroupProducerActivationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>java.lang.String</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#id GoogleNetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#project GoogleNetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#location GoogleNetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupProducerActivationId"></a>

- *Type:* java.lang.String

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_group_producer_activation_id GoogleNetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupRangeActivation"></a>

- *Type:* java.lang.String

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_group_range_activation GoogleNetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastProducerAssociation"></a>

- *Type:* java.lang.String

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_producer_association GoogleNetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#deletion_policy GoogleNetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#description GoogleNetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#id GoogleNetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#labels GoogleNetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#project GoogleNetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#timeouts GoogleNetworkServicesMulticastGroupProducerActivation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesMulticastGroupProducerActivationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivation;

GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivation;

GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivation;

GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivation;

GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesMulticastGroupProducerActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesMulticastGroupProducerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastGroupProducerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList">GoogleNetworkServicesMulticastGroupProducerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput">multicastGroupProducerActivationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput">multicastGroupRangeActivationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput">multicastProducerAssociationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.state"></a>

```java
public GoogleNetworkServicesMulticastGroupProducerActivationStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList">GoogleNetworkServicesMulticastGroupProducerActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeouts"></a>

```java
public GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupProducerActivationIdInput`<sup>Optional</sup> <a name="multicastGroupProducerActivationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput"></a>

```java
public java.lang.String getMulticastGroupProducerActivationIdInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeActivationInput`<sup>Optional</sup> <a name="multicastGroupRangeActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput"></a>

```java
public java.lang.String getMulticastGroupRangeActivationInput();
```

- *Type:* java.lang.String

---

##### `multicastProducerAssociationInput`<sup>Optional</sup> <a name="multicastProducerAssociationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput"></a>

```java
public java.lang.String getMulticastProducerAssociationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesMulticastGroupProducerActivationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId"></a>

```java
public java.lang.String getMulticastGroupProducerActivationId();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation"></a>

```java
public java.lang.String getMulticastGroupRangeActivation();
```

- *Type:* java.lang.String

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation"></a>

```java
public java.lang.String getMulticastProducerAssociation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastGroupProducerActivationConfig <a name="GoogleNetworkServicesMulticastGroupProducerActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivationConfig;

GoogleNetworkServicesMulticastGroupProducerActivationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastGroupProducerActivationId(java.lang.String)
    .multicastGroupRangeActivation(java.lang.String)
    .multicastProducerAssociation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesMulticastGroupProducerActivationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>java.lang.String</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>java.lang.String</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#id GoogleNetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#project GoogleNetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#location GoogleNetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId"></a>

```java
public java.lang.String getMulticastGroupProducerActivationId();
```

- *Type:* java.lang.String

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_group_producer_activation_id GoogleNetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation"></a>

```java
public java.lang.String getMulticastGroupRangeActivation();
```

- *Type:* java.lang.String

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_group_range_activation GoogleNetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation"></a>

```java
public java.lang.String getMulticastProducerAssociation();
```

- *Type:* java.lang.String

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_producer_association GoogleNetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#deletion_policy GoogleNetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#description GoogleNetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#id GoogleNetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#labels GoogleNetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#project GoogleNetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesMulticastGroupProducerActivationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#timeouts GoogleNetworkServicesMulticastGroupProducerActivation#timeouts}

---

### GoogleNetworkServicesMulticastGroupProducerActivationState <a name="GoogleNetworkServicesMulticastGroupProducerActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivationState;

GoogleNetworkServicesMulticastGroupProducerActivationState.builder()
    .build();
```


### GoogleNetworkServicesMulticastGroupProducerActivationTimeouts <a name="GoogleNetworkServicesMulticastGroupProducerActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts;

GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#create GoogleNetworkServicesMulticastGroupProducerActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#delete GoogleNetworkServicesMulticastGroupProducerActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#update GoogleNetworkServicesMulticastGroupProducerActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#create GoogleNetworkServicesMulticastGroupProducerActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#delete GoogleNetworkServicesMulticastGroupProducerActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_group_producer_activation#update GoogleNetworkServicesMulticastGroupProducerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastGroupProducerActivationStateList <a name="GoogleNetworkServicesMulticastGroupProducerActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivationStateList;

new GoogleNetworkServicesMulticastGroupProducerActivationStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.get"></a>

```java
public GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference <a name="GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference;

new GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState">GoogleNetworkServicesMulticastGroupProducerActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesMulticastGroupProducerActivationState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState">GoogleNetworkServicesMulticastGroupProducerActivationState</a>

---


### GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_multicast_group_producer_activation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference;

new GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesMulticastGroupProducerActivationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

---



