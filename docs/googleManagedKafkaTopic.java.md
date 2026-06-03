# `googleManagedKafkaTopic` Submodule <a name="`googleManagedKafkaTopic` Submodule" id="@cdktn/provider-google-beta.googleManagedKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaTopic <a name="GoogleManagedKafkaTopic" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic google_managed_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopic;

GoogleManagedKafkaTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .replicationFactor(java.lang.Number)
    .topicId(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleManagedKafkaTopicTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | The number of replicas of each partition. A replication factor of 3 is recommended for high availability. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.topicId">topicId</a></code> | <code>java.lang.String</code> | The ID to use for the topic, which will become the final component of the topic's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration for the topic that are overridden from the cluster defaults. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#id GoogleManagedKafkaTopic#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | The number of partitions in a topic. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#project GoogleManagedKafkaTopic#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#cluster GoogleManagedKafkaTopic#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#location GoogleManagedKafkaTopic#location}

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

The number of replicas of each partition. A replication factor of 3 is recommended for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#replication_factor GoogleManagedKafkaTopic#replication_factor}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.topicId"></a>

- *Type:* java.lang.String

The ID to use for the topic, which will become the final component of the topic's name.

This value is structured like: 'my-topic-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#topic_id GoogleManagedKafkaTopic#topic_id}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.configs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration for the topic that are overridden from the cluster defaults.

The key of the map is a Kafka topic property name, for example: 'cleanup.policy=compact', 'compression.type=producer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#configs GoogleManagedKafkaTopic#configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#deletion_policy GoogleManagedKafkaTopic#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#id GoogleManagedKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.partitionCount"></a>

- *Type:* java.lang.Number

The number of partitions in a topic.

You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#partition_count GoogleManagedKafkaTopic#partition_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#project GoogleManagedKafkaTopic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#timeouts GoogleManagedKafkaTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.putTimeouts"></a>

```java
public void putTimeouts(GoogleManagedKafkaTopicTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetConfigs"></a>

```java
public void resetConfigs()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetId"></a>

```java
public void resetId()
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetPartitionCount"></a>

```java
public void resetPartitionCount()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleManagedKafkaTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopic;

GoogleManagedKafkaTopic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopic;

GoogleManagedKafkaTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopic;

GoogleManagedKafkaTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopic;

GoogleManagedKafkaTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleManagedKafkaTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleManagedKafkaTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleManagedKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleManagedKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference">GoogleManagedKafkaTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.configsInput">configsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.partitionCountInput">partitionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.timeouts"></a>

```java
public GoogleManagedKafkaTopicTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference">GoogleManagedKafkaTopicTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.configsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.partitionCountInput"></a>

```java
public java.lang.Number getPartitionCountInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.timeoutsInput"></a>

```java
public IResolvable|GoogleManagedKafkaTopicTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaTopicConfig <a name="GoogleManagedKafkaTopicConfig" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopicConfig;

GoogleManagedKafkaTopicConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .replicationFactor(java.lang.Number)
    .topicId(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleManagedKafkaTopicTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | The number of replicas of each partition. A replication factor of 3 is recommended for high availability. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.topicId">topicId</a></code> | <code>java.lang.String</code> | The ID to use for the topic, which will become the final component of the topic's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration for the topic that are overridden from the cluster defaults. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#id GoogleManagedKafkaTopic#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | The number of partitions in a topic. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#project GoogleManagedKafkaTopic#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#cluster GoogleManagedKafkaTopic#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#location GoogleManagedKafkaTopic#location}

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

The number of replicas of each partition. A replication factor of 3 is recommended for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#replication_factor GoogleManagedKafkaTopic#replication_factor}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

The ID to use for the topic, which will become the final component of the topic's name.

This value is structured like: 'my-topic-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#topic_id GoogleManagedKafkaTopic#topic_id}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration for the topic that are overridden from the cluster defaults.

The key of the map is a Kafka topic property name, for example: 'cleanup.policy=compact', 'compression.type=producer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#configs GoogleManagedKafkaTopic#configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#deletion_policy GoogleManagedKafkaTopic#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#id GoogleManagedKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

The number of partitions in a topic.

You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#partition_count GoogleManagedKafkaTopic#partition_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#project GoogleManagedKafkaTopic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicConfig.property.timeouts"></a>

```java
public GoogleManagedKafkaTopicTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#timeouts GoogleManagedKafkaTopic#timeouts}

---

### GoogleManagedKafkaTopicTimeouts <a name="GoogleManagedKafkaTopicTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopicTimeouts;

GoogleManagedKafkaTopicTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#create GoogleManagedKafkaTopic#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#delete GoogleManagedKafkaTopic#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#update GoogleManagedKafkaTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#create GoogleManagedKafkaTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#delete GoogleManagedKafkaTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_topic#update GoogleManagedKafkaTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaTopicTimeoutsOutputReference <a name="GoogleManagedKafkaTopicTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_topic.GoogleManagedKafkaTopicTimeoutsOutputReference;

new GoogleManagedKafkaTopicTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleManagedKafkaTopicTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleManagedKafkaTopic.GoogleManagedKafkaTopicTimeouts">GoogleManagedKafkaTopicTimeouts</a>

---



