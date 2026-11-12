# `googleManagedKafkaAclBinding` Submodule <a name="`googleManagedKafkaAclBinding` Submodule" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaAclBinding <a name="GoogleManagedKafkaAclBinding" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding google_managed_kafka_acl_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBinding;

GoogleManagedKafkaAclBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclId(java.lang.String)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .operation(java.lang.String)
    .principal(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .permissionType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleManagedKafkaAclBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.aclId">aclId</a></code> | <code>java.lang.String</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.operation">operation</a></code> | <code>java.lang.String</code> | The operation type. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | The principal. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.permissionType">permissionType</a></code> | <code>java.lang.String</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.aclId"></a>

- *Type:* java.lang.String

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#acl_id GoogleManagedKafkaAclBinding#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#cluster GoogleManagedKafkaAclBinding#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#location GoogleManagedKafkaAclBinding#location}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.operation"></a>

- *Type:* java.lang.String

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#operation GoogleManagedKafkaAclBinding#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#principal GoogleManagedKafkaAclBinding#principal}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#deletion_policy GoogleManagedKafkaAclBinding#deletion_policy}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#host GoogleManagedKafkaAclBinding#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionType`<sup>Optional</sup> <a name="permissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.permissionType"></a>

- *Type:* java.lang.String

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#permission_type GoogleManagedKafkaAclBinding#permission_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#timeouts GoogleManagedKafkaAclBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetPermissionType">resetPermissionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleManagedKafkaAclBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetId"></a>

```java
public void resetId()
```

##### `resetPermissionType` <a name="resetPermissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetPermissionType"></a>

```java
public void resetPermissionType()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBinding;

GoogleManagedKafkaAclBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBinding;

GoogleManagedKafkaAclBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBinding;

GoogleManagedKafkaAclBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBinding;

GoogleManagedKafkaAclBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleManagedKafkaAclBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleManagedKafkaAclBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleManagedKafkaAclBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaAclBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference">GoogleManagedKafkaAclBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclIdInput">aclIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionTypeInput">permissionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclId">aclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeouts"></a>

```java
public GoogleManagedKafkaAclBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference">GoogleManagedKafkaAclBindingTimeoutsOutputReference</a>

---

##### `aclIdInput`<sup>Optional</sup> <a name="aclIdInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclIdInput"></a>

```java
public java.lang.String getAclIdInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionTypeInput"></a>

```java
public java.lang.String getPermissionTypeInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeoutsInput"></a>

```java
public IResolvable|GoogleManagedKafkaAclBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclId"></a>

```java
public java.lang.String getAclId();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaAclBindingConfig <a name="GoogleManagedKafkaAclBindingConfig" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBindingConfig;

GoogleManagedKafkaAclBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclId(java.lang.String)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .operation(java.lang.String)
    .principal(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .permissionType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleManagedKafkaAclBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.aclId">aclId</a></code> | <code>java.lang.String</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.operation">operation</a></code> | <code>java.lang.String</code> | The operation type. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | The principal. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.host">host</a></code> | <code>java.lang.String</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.aclId"></a>

```java
public java.lang.String getAclId();
```

- *Type:* java.lang.String

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#acl_id GoogleManagedKafkaAclBinding#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#cluster GoogleManagedKafkaAclBinding#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#location GoogleManagedKafkaAclBinding#location}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#operation GoogleManagedKafkaAclBinding#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#principal GoogleManagedKafkaAclBinding#principal}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#deletion_policy GoogleManagedKafkaAclBinding#deletion_policy}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#host GoogleManagedKafkaAclBinding#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionType`<sup>Optional</sup> <a name="permissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#permission_type GoogleManagedKafkaAclBinding#permission_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.timeouts"></a>

```java
public GoogleManagedKafkaAclBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#timeouts GoogleManagedKafkaAclBinding#timeouts}

---

### GoogleManagedKafkaAclBindingTimeouts <a name="GoogleManagedKafkaAclBindingTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBindingTimeouts;

GoogleManagedKafkaAclBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#create GoogleManagedKafkaAclBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#delete GoogleManagedKafkaAclBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#update GoogleManagedKafkaAclBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#create GoogleManagedKafkaAclBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#delete GoogleManagedKafkaAclBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#update GoogleManagedKafkaAclBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaAclBindingTimeoutsOutputReference <a name="GoogleManagedKafkaAclBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_acl_binding.GoogleManagedKafkaAclBindingTimeoutsOutputReference;

new GoogleManagedKafkaAclBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleManagedKafkaAclBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---



