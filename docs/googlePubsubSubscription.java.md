# `googlePubsubSubscription` Submodule <a name="`googlePubsubSubscription` Submodule" id="@cdktn/provider-google-beta.googlePubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubSubscription <a name="GooglePubsubSubscription" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscription;

GooglePubsubSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .topic(java.lang.String)
//  .ackDeadlineSeconds(java.lang.Number)
//  .bigqueryConfig(GooglePubsubSubscriptionBigqueryConfig)
//  .cloudStorageConfig(GooglePubsubSubscriptionCloudStorageConfig)
//  .deadLetterPolicy(GooglePubsubSubscriptionDeadLetterPolicy)
//  .deletionPolicy(java.lang.String)
//  .enableExactlyOnceDelivery(java.lang.Boolean|IResolvable)
//  .enableMessageOrdering(java.lang.Boolean|IResolvable)
//  .expirationPolicy(GooglePubsubSubscriptionExpirationPolicy)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .messageRetentionDuration(java.lang.String)
//  .messageTransforms(IResolvable|java.util.List<GooglePubsubSubscriptionMessageTransforms>)
//  .project(java.lang.String)
//  .pushConfig(GooglePubsubSubscriptionPushConfig)
//  .retainAckedMessages(java.lang.Boolean|IResolvable)
//  .retryPolicy(GooglePubsubSubscriptionRetryPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GooglePubsubSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.topic">topic</a></code> | <code>java.lang.String</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.enableMessageOrdering">enableMessageOrdering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.messageTransforms">messageTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>></code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.retainAckedMessages">retainAckedMessages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#name GooglePubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.topic"></a>

- *Type:* java.lang.String

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#topic GooglePubsubSubscription#topic}

---

##### `ackDeadlineSeconds`<sup>Optional</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.ackDeadlineSeconds"></a>

- *Type:* java.lang.Number

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#ack_deadline_seconds GooglePubsubSubscription#ack_deadline_seconds}

---

##### `bigqueryConfig`<sup>Optional</sup> <a name="bigqueryConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.bigqueryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#bigquery_config GooglePubsubSubscription#bigquery_config}

---

##### `cloudStorageConfig`<sup>Optional</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.cloudStorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#cloud_storage_config GooglePubsubSubscription#cloud_storage_config}

---

##### `deadLetterPolicy`<sup>Optional</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.deadLetterPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#dead_letter_policy GooglePubsubSubscription#dead_letter_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#deletion_policy GooglePubsubSubscription#deletion_policy}

---

##### `enableExactlyOnceDelivery`<sup>Optional</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.enableExactlyOnceDelivery"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#enable_exactly_once_delivery GooglePubsubSubscription#enable_exactly_once_delivery}

---

##### `enableMessageOrdering`<sup>Optional</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.enableMessageOrdering"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#enable_message_ordering GooglePubsubSubscription#enable_message_ordering}

---

##### `expirationPolicy`<sup>Optional</sup> <a name="expirationPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.expirationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#expiration_policy GooglePubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#filter GooglePubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#labels GooglePubsubSubscription#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.messageRetentionDuration"></a>

- *Type:* java.lang.String

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#message_retention_duration GooglePubsubSubscription#message_retention_duration}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.messageTransforms"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>>

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#message_transforms GooglePubsubSubscription#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}.

---

##### `pushConfig`<sup>Optional</sup> <a name="pushConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.pushConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#push_config GooglePubsubSubscription#push_config}

---

##### `retainAckedMessages`<sup>Optional</sup> <a name="retainAckedMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.retainAckedMessages"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#retain_acked_messages GooglePubsubSubscription#retain_acked_messages}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#retry_policy GooglePubsubSubscription#retry_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

Resource manager tags to be bound to the subscription. Tag
keys and values have the same definition as resource manager tags. Keys
must be in the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#tags GooglePubsubSubscription#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#timeouts GooglePubsubSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig">putBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig">putCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy">putDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy">putExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putMessageTransforms">putMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig">putPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetAckDeadlineSeconds">resetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetBigqueryConfig">resetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetCloudStorageConfig">resetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeadLetterPolicy">resetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableExactlyOnceDelivery">resetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableMessageOrdering">resetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetExpirationPolicy">resetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageTransforms">resetMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetPushConfig">resetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetainAckedMessages">resetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryConfig` <a name="putBigqueryConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig"></a>

```java
public void putBigqueryConfig(GooglePubsubSubscriptionBigqueryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---

##### `putCloudStorageConfig` <a name="putCloudStorageConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig"></a>

```java
public void putCloudStorageConfig(GooglePubsubSubscriptionCloudStorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---

##### `putDeadLetterPolicy` <a name="putDeadLetterPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy"></a>

```java
public void putDeadLetterPolicy(GooglePubsubSubscriptionDeadLetterPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---

##### `putExpirationPolicy` <a name="putExpirationPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy"></a>

```java
public void putExpirationPolicy(GooglePubsubSubscriptionExpirationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---

##### `putMessageTransforms` <a name="putMessageTransforms" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putMessageTransforms"></a>

```java
public void putMessageTransforms(IResolvable|java.util.List<GooglePubsubSubscriptionMessageTransforms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putMessageTransforms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>>

---

##### `putPushConfig` <a name="putPushConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig"></a>

```java
public void putPushConfig(GooglePubsubSubscriptionPushConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy"></a>

```java
public void putRetryPolicy(GooglePubsubSubscriptionRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts"></a>

```java
public void putTimeouts(GooglePubsubSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---

##### `resetAckDeadlineSeconds` <a name="resetAckDeadlineSeconds" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetAckDeadlineSeconds"></a>

```java
public void resetAckDeadlineSeconds()
```

##### `resetBigqueryConfig` <a name="resetBigqueryConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetBigqueryConfig"></a>

```java
public void resetBigqueryConfig()
```

##### `resetCloudStorageConfig` <a name="resetCloudStorageConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetCloudStorageConfig"></a>

```java
public void resetCloudStorageConfig()
```

##### `resetDeadLetterPolicy` <a name="resetDeadLetterPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeadLetterPolicy"></a>

```java
public void resetDeadLetterPolicy()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEnableExactlyOnceDelivery` <a name="resetEnableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableExactlyOnceDelivery"></a>

```java
public void resetEnableExactlyOnceDelivery()
```

##### `resetEnableMessageOrdering` <a name="resetEnableMessageOrdering" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableMessageOrdering"></a>

```java
public void resetEnableMessageOrdering()
```

##### `resetExpirationPolicy` <a name="resetExpirationPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetExpirationPolicy"></a>

```java
public void resetExpirationPolicy()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageRetentionDuration"></a>

```java
public void resetMessageRetentionDuration()
```

##### `resetMessageTransforms` <a name="resetMessageTransforms" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageTransforms"></a>

```java
public void resetMessageTransforms()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetProject"></a>

```java
public void resetProject()
```

##### `resetPushConfig` <a name="resetPushConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetPushConfig"></a>

```java
public void resetPushConfig()
```

##### `resetRetainAckedMessages` <a name="resetRetainAckedMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetainAckedMessages"></a>

```java
public void resetRetainAckedMessages()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GooglePubsubSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscription;

GooglePubsubSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscription;

GooglePubsubSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscription;

GooglePubsubSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscription;

GooglePubsubSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePubsubSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GooglePubsubSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePubsubSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GooglePubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference">GooglePubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference">GooglePubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference">GooglePubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageTransforms">messageTransforms</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList">GooglePubsubSubscriptionMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference">GooglePubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference">GooglePubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference">GooglePubsubSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSecondsInput">ackDeadlineSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfigInput">bigqueryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfigInput">cloudStorageConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicyInput">deadLetterPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDeliveryInput">enableExactlyOnceDeliveryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrderingInput">enableMessageOrderingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicyInput">expirationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageTransformsInput">messageTransformsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfigInput">pushConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessagesInput">retainAckedMessagesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessages">retainAckedMessages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigqueryConfig`<sup>Required</sup> <a name="bigqueryConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfig"></a>

```java
public GooglePubsubSubscriptionBigqueryConfigOutputReference getBigqueryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference">GooglePubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `cloudStorageConfig`<sup>Required</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfig"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigOutputReference getCloudStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `deadLetterPolicy`<sup>Required</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicy"></a>

```java
public GooglePubsubSubscriptionDeadLetterPolicyOutputReference getDeadLetterPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference">GooglePubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `expirationPolicy`<sup>Required</sup> <a name="expirationPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicy"></a>

```java
public GooglePubsubSubscriptionExpirationPolicyOutputReference getExpirationPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference">GooglePubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `messageTransforms`<sup>Required</sup> <a name="messageTransforms" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageTransforms"></a>

```java
public GooglePubsubSubscriptionMessageTransformsList getMessageTransforms();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList">GooglePubsubSubscriptionMessageTransformsList</a>

---

##### `pushConfig`<sup>Required</sup> <a name="pushConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfig"></a>

```java
public GooglePubsubSubscriptionPushConfigOutputReference getPushConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference">GooglePubsubSubscriptionPushConfigOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicy"></a>

```java
public GooglePubsubSubscriptionRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference">GooglePubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeouts"></a>

```java
public GooglePubsubSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference">GooglePubsubSubscriptionTimeoutsOutputReference</a>

---

##### `ackDeadlineSecondsInput`<sup>Optional</sup> <a name="ackDeadlineSecondsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSecondsInput"></a>

```java
public java.lang.Number getAckDeadlineSecondsInput();
```

- *Type:* java.lang.Number

---

##### `bigqueryConfigInput`<sup>Optional</sup> <a name="bigqueryConfigInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfigInput"></a>

```java
public GooglePubsubSubscriptionBigqueryConfig getBigqueryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---

##### `cloudStorageConfigInput`<sup>Optional</sup> <a name="cloudStorageConfigInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfigInput"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfig getCloudStorageConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---

##### `deadLetterPolicyInput`<sup>Optional</sup> <a name="deadLetterPolicyInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicyInput"></a>

```java
public GooglePubsubSubscriptionDeadLetterPolicy getDeadLetterPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="enableExactlyOnceDeliveryInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDeliveryInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableExactlyOnceDeliveryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMessageOrderingInput`<sup>Optional</sup> <a name="enableMessageOrderingInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrderingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMessageOrderingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expirationPolicyInput`<sup>Optional</sup> <a name="expirationPolicyInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicyInput"></a>

```java
public GooglePubsubSubscriptionExpirationPolicy getExpirationPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDurationInput"></a>

```java
public java.lang.String getMessageRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `messageTransformsInput`<sup>Optional</sup> <a name="messageTransformsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageTransformsInput"></a>

```java
public IResolvable|java.util.List<GooglePubsubSubscriptionMessageTransforms> getMessageTransformsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushConfigInput`<sup>Optional</sup> <a name="pushConfigInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfigInput"></a>

```java
public GooglePubsubSubscriptionPushConfig getPushConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---

##### `retainAckedMessagesInput`<sup>Optional</sup> <a name="retainAckedMessagesInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessagesInput"></a>

```java
public java.lang.Boolean|IResolvable getRetainAckedMessagesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicyInput"></a>

```java
public GooglePubsubSubscriptionRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeoutsInput"></a>

```java
public IResolvable|GooglePubsubSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `ackDeadlineSeconds`<sup>Required</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSeconds"></a>

```java
public java.lang.Number getAckDeadlineSeconds();
```

- *Type:* java.lang.Number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `enableExactlyOnceDelivery`<sup>Required</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDelivery"></a>

```java
public java.lang.Boolean|IResolvable getEnableExactlyOnceDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMessageOrdering`<sup>Required</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrdering"></a>

```java
public java.lang.Boolean|IResolvable getEnableMessageOrdering();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retainAckedMessages`<sup>Required</sup> <a name="retainAckedMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessages"></a>

```java
public java.lang.Boolean|IResolvable getRetainAckedMessages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubSubscriptionBigqueryConfig <a name="GooglePubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionBigqueryConfig;

GooglePubsubSubscriptionBigqueryConfig.builder()
    .table(java.lang.String)
//  .dropUnknownFields(java.lang.Boolean|IResolvable)
//  .serviceAccountEmail(java.lang.String)
//  .useTableSchema(java.lang.Boolean|IResolvable)
//  .useTopicSchema(java.lang.Boolean|IResolvable)
//  .writeMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.table">table</a></code> | <code>java.lang.String</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.dropUnknownFields">dropUnknownFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTableSchema">useTableSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#table GooglePubsubSubscription#table}

---

##### `dropUnknownFields`<sup>Optional</sup> <a name="dropUnknownFields" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```java
public java.lang.Boolean|IResolvable getDropUnknownFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#drop_unknown_fields GooglePubsubSubscription#drop_unknown_fields}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `useTableSchema`<sup>Optional</sup> <a name="useTableSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTableSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#use_table_schema GooglePubsubSubscription#use_table_schema}

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionCloudStorageConfig <a name="GooglePubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionCloudStorageConfig;

GooglePubsubSubscriptionCloudStorageConfig.builder()
    .bucket(java.lang.String)
//  .avroConfig(GooglePubsubSubscriptionCloudStorageConfigAvroConfig)
//  .filenameDatetimeFormat(java.lang.String)
//  .filenamePrefix(java.lang.String)
//  .filenameSuffix(java.lang.String)
//  .maxBytes(java.lang.Number)
//  .maxDuration(java.lang.String)
//  .maxMessages(java.lang.Number)
//  .serviceAccountEmail(java.lang.String)
//  .textConfig(GooglePubsubSubscriptionCloudStorageConfigTextConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>java.lang.String</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenamePrefix">filenamePrefix</a></code> | <code>java.lang.String</code> | User-provided prefix for Cloud Storage filename. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameSuffix">filenameSuffix</a></code> | <code>java.lang.String</code> | User-provided suffix for Cloud Storage filename. Must not end in "/". |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxBytes">maxBytes</a></code> | <code>java.lang.Number</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxDuration">maxDuration</a></code> | <code>java.lang.String</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxMessages">maxMessages</a></code> | <code>java.lang.Number</code> | The maximum messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.textConfig">textConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a></code> | text_config block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#bucket GooglePubsubSubscription#bucket}

---

##### `avroConfig`<sup>Optional</sup> <a name="avroConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigAvroConfig getAvroConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#avro_config GooglePubsubSubscription#avro_config}

---

##### `filenameDatetimeFormat`<sup>Optional</sup> <a name="filenameDatetimeFormat" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```java
public java.lang.String getFilenameDatetimeFormat();
```

- *Type:* java.lang.String

User-provided format string specifying how to represent datetimes in Cloud Storage filenames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#filename_datetime_format GooglePubsubSubscription#filename_datetime_format}

---

##### `filenamePrefix`<sup>Optional</sup> <a name="filenamePrefix" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```java
public java.lang.String getFilenamePrefix();
```

- *Type:* java.lang.String

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#filename_prefix GooglePubsubSubscription#filename_prefix}

---

##### `filenameSuffix`<sup>Optional</sup> <a name="filenameSuffix" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```java
public java.lang.String getFilenameSuffix();
```

- *Type:* java.lang.String

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#filename_suffix GooglePubsubSubscription#filename_suffix}

---

##### `maxBytes`<sup>Optional</sup> <a name="maxBytes" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```java
public java.lang.Number getMaxBytes();
```

- *Type:* java.lang.Number

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#max_bytes GooglePubsubSubscription#max_bytes}

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```java
public java.lang.String getMaxDuration();
```

- *Type:* java.lang.String

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#max_duration GooglePubsubSubscription#max_duration}

---

##### `maxMessages`<sup>Optional</sup> <a name="maxMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```java
public java.lang.Number getMaxMessages();
```

- *Type:* java.lang.Number

The maximum messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#max_messages GooglePubsubSubscription#max_messages}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `textConfig`<sup>Optional</sup> <a name="textConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.textConfig"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigTextConfig getTextConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a>

text_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#text_config GooglePubsubSubscription#text_config}

---

### GooglePubsubSubscriptionCloudStorageConfigAvroConfig <a name="GooglePubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig;

GooglePubsubSubscriptionCloudStorageConfigAvroConfig.builder()
//  .useTopicSchema(java.lang.Boolean|IResolvable)
//  .writeMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output. |

---

##### `useTopicSchema`<sup>Optional</sup> <a name="useTopicSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}

---

##### `writeMetadata`<sup>Optional</sup> <a name="writeMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionCloudStorageConfigTextConfig <a name="GooglePubsubSubscriptionCloudStorageConfigTextConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig;

GooglePubsubSubscriptionCloudStorageConfigTextConfig.builder()
    .build();
```


### GooglePubsubSubscriptionConfig <a name="GooglePubsubSubscriptionConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionConfig;

GooglePubsubSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .topic(java.lang.String)
//  .ackDeadlineSeconds(java.lang.Number)
//  .bigqueryConfig(GooglePubsubSubscriptionBigqueryConfig)
//  .cloudStorageConfig(GooglePubsubSubscriptionCloudStorageConfig)
//  .deadLetterPolicy(GooglePubsubSubscriptionDeadLetterPolicy)
//  .deletionPolicy(java.lang.String)
//  .enableExactlyOnceDelivery(java.lang.Boolean|IResolvable)
//  .enableMessageOrdering(java.lang.Boolean|IResolvable)
//  .expirationPolicy(GooglePubsubSubscriptionExpirationPolicy)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .messageRetentionDuration(java.lang.String)
//  .messageTransforms(IResolvable|java.util.List<GooglePubsubSubscriptionMessageTransforms>)
//  .project(java.lang.String)
//  .pushConfig(GooglePubsubSubscriptionPushConfig)
//  .retainAckedMessages(java.lang.Boolean|IResolvable)
//  .retryPolicy(GooglePubsubSubscriptionRetryPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GooglePubsubSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.topic">topic</a></code> | <code>java.lang.String</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.cloudStorageConfig">cloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageTransforms">messageTransforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>></code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retainAckedMessages">retainAckedMessages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input only. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#name GooglePubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#topic GooglePubsubSubscription#topic}

---

##### `ackDeadlineSeconds`<sup>Optional</sup> <a name="ackDeadlineSeconds" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.ackDeadlineSeconds"></a>

```java
public java.lang.Number getAckDeadlineSeconds();
```

- *Type:* java.lang.Number

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#ack_deadline_seconds GooglePubsubSubscription#ack_deadline_seconds}

---

##### `bigqueryConfig`<sup>Optional</sup> <a name="bigqueryConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.bigqueryConfig"></a>

```java
public GooglePubsubSubscriptionBigqueryConfig getBigqueryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#bigquery_config GooglePubsubSubscription#bigquery_config}

---

##### `cloudStorageConfig`<sup>Optional</sup> <a name="cloudStorageConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.cloudStorageConfig"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfig getCloudStorageConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#cloud_storage_config GooglePubsubSubscription#cloud_storage_config}

---

##### `deadLetterPolicy`<sup>Optional</sup> <a name="deadLetterPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deadLetterPolicy"></a>

```java
public GooglePubsubSubscriptionDeadLetterPolicy getDeadLetterPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#dead_letter_policy GooglePubsubSubscription#dead_letter_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#deletion_policy GooglePubsubSubscription#deletion_policy}

---

##### `enableExactlyOnceDelivery`<sup>Optional</sup> <a name="enableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableExactlyOnceDelivery"></a>

```java
public java.lang.Boolean|IResolvable getEnableExactlyOnceDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#enable_exactly_once_delivery GooglePubsubSubscription#enable_exactly_once_delivery}

---

##### `enableMessageOrdering`<sup>Optional</sup> <a name="enableMessageOrdering" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableMessageOrdering"></a>

```java
public java.lang.Boolean|IResolvable getEnableMessageOrdering();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#enable_message_ordering GooglePubsubSubscription#enable_message_ordering}

---

##### `expirationPolicy`<sup>Optional</sup> <a name="expirationPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.expirationPolicy"></a>

```java
public GooglePubsubSubscriptionExpirationPolicy getExpirationPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#expiration_policy GooglePubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#filter GooglePubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#labels GooglePubsubSubscription#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#message_retention_duration GooglePubsubSubscription#message_retention_duration}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageTransforms"></a>

```java
public IResolvable|java.util.List<GooglePubsubSubscriptionMessageTransforms> getMessageTransforms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>>

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#message_transforms GooglePubsubSubscription#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}.

---

##### `pushConfig`<sup>Optional</sup> <a name="pushConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.pushConfig"></a>

```java
public GooglePubsubSubscriptionPushConfig getPushConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#push_config GooglePubsubSubscription#push_config}

---

##### `retainAckedMessages`<sup>Optional</sup> <a name="retainAckedMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retainAckedMessages"></a>

```java
public java.lang.Boolean|IResolvable getRetainAckedMessages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#retain_acked_messages GooglePubsubSubscription#retain_acked_messages}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retryPolicy"></a>

```java
public GooglePubsubSubscriptionRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#retry_policy GooglePubsubSubscription#retry_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input only.

Resource manager tags to be bound to the subscription. Tag
keys and values have the same definition as resource manager tags. Keys
must be in the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#tags GooglePubsubSubscription#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.timeouts"></a>

```java
public GooglePubsubSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#timeouts GooglePubsubSubscription#timeouts}

---

### GooglePubsubSubscriptionDeadLetterPolicy <a name="GooglePubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionDeadLetterPolicy;

GooglePubsubSubscriptionDeadLetterPolicy.builder()
//  .deadLetterTopic(java.lang.String)
//  .maxDeliveryAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">deadLetterTopic</a></code> | <code>java.lang.String</code> | The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of delivery attempts for any message. The value must be between 5 and 100. |

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```java
public java.lang.String getDeadLetterTopic();
```

- *Type:* java.lang.String

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#dead_letter_topic GooglePubsubSubscription#dead_letter_topic}

---

##### `maxDeliveryAttempts`<sup>Optional</sup> <a name="maxDeliveryAttempts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#max_delivery_attempts GooglePubsubSubscription#max_delivery_attempts}

---

### GooglePubsubSubscriptionExpirationPolicy <a name="GooglePubsubSubscriptionExpirationPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionExpirationPolicy;

GooglePubsubSubscriptionExpirationPolicy.builder()
    .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#ttl GooglePubsubSubscription#ttl}

---

### GooglePubsubSubscriptionMessageTransforms <a name="GooglePubsubSubscriptionMessageTransforms" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransforms;

GooglePubsubSubscriptionMessageTransforms.builder()
//  .aiInference(GooglePubsubSubscriptionMessageTransformsAiInference)
//  .disabled(java.lang.Boolean|IResolvable)
//  .javascriptUdf(GooglePubsubSubscriptionMessageTransformsJavascriptUdf)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a></code> | ai_inference block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether or not to use this transform. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | javascript_udf block. |

---

##### `aiInference`<sup>Optional</sup> <a name="aiInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.property.aiInference"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInference getAiInference();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a>

ai_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#ai_inference GooglePubsubSubscription#ai_inference}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether or not to use this transform.

If not set or 'false',
the transform will be applied to messages. Default: 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#disabled GooglePubsubSubscription#disabled}

---

##### `javascriptUdf`<sup>Optional</sup> <a name="javascriptUdf" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms.property.javascriptUdf"></a>

```java
public GooglePubsubSubscriptionMessageTransformsJavascriptUdf getJavascriptUdf();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a>

javascript_udf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#javascript_udf GooglePubsubSubscription#javascript_udf}

---

### GooglePubsubSubscriptionMessageTransformsAiInference <a name="GooglePubsubSubscriptionMessageTransformsAiInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsAiInference;

GooglePubsubSubscriptionMessageTransformsAiInference.builder()
    .endpoint(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .unstructuredInference(GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account to use to make prediction requests against endpoints. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | unstructured_inference block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'.

Vertex AI API requests will be sent to this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#endpoint GooglePubsubSubscription#endpoint}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account to use to make prediction requests against endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `unstructuredInference`<sup>Optional</sup> <a name="unstructuredInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference.property.unstructuredInference"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference getUnstructuredInference();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

unstructured_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#unstructured_inference GooglePubsubSubscription#unstructured_inference}

---

### GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference <a name="GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference;

GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.builder()
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A parameters object to be included in each inference request. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A parameters object to be included in each inference request.

The parameters object is combined with the data field of the Pub/Sub
message to form the inference request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#parameters GooglePubsubSubscription#parameters}

---

### GooglePubsubSubscriptionMessageTransformsJavascriptUdf <a name="GooglePubsubSubscriptionMessageTransformsJavascriptUdf" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf;

GooglePubsubSubscriptionMessageTransformsJavascriptUdf.builder()
    .code(java.lang.String)
    .functionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf.property.code">code</a></code> | <code>java.lang.String</code> | JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Name of the JavaScript function that should be applied to Pub/Sub messages. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message.

* *

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Name of the JavaScript function that should be applied to Pub/Sub messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#function_name GooglePubsubSubscription#function_name}

---

### GooglePubsubSubscriptionPushConfig <a name="GooglePubsubSubscriptionPushConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionPushConfig;

GooglePubsubSubscriptionPushConfig.builder()
    .pushEndpoint(java.lang.String)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .noWrapper(GooglePubsubSubscriptionPushConfigNoWrapper)
//  .oidcToken(GooglePubsubSubscriptionPushConfigOidcToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.pushEndpoint">pushEndpoint</a></code> | <code>java.lang.String</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Endpoint configuration attributes. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```java
public java.lang.String getPushEndpoint();
```

- *Type:* java.lang.String

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#push_endpoint GooglePubsubSubscription#push_endpoint}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Endpoint configuration attributes.

Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.

The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.

If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.

The possible values for this attribute are:

* v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
* v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#attributes GooglePubsubSubscription#attributes}

---

##### `noWrapper`<sup>Optional</sup> <a name="noWrapper" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.noWrapper"></a>

```java
public GooglePubsubSubscriptionPushConfigNoWrapper getNoWrapper();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#no_wrapper GooglePubsubSubscription#no_wrapper}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.oidcToken"></a>

```java
public GooglePubsubSubscriptionPushConfigOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#oidc_token GooglePubsubSubscription#oidc_token}

---

### GooglePubsubSubscriptionPushConfigNoWrapper <a name="GooglePubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionPushConfigNoWrapper;

GooglePubsubSubscriptionPushConfigNoWrapper.builder()
    .writeMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionPushConfigOidcToken <a name="GooglePubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionPushConfigOidcToken;

GooglePubsubSubscriptionPushConfigOidcToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .audience(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating the OIDC token. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#audience GooglePubsubSubscription#audience}

---

### GooglePubsubSubscriptionRetryPolicy <a name="GooglePubsubSubscriptionRetryPolicy" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionRetryPolicy;

GooglePubsubSubscriptionRetryPolicy.builder()
//  .maximumBackoff(java.lang.String)
//  .minimumBackoff(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#maximum_backoff GooglePubsubSubscription#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#minimum_backoff GooglePubsubSubscription#minimum_backoff}

---

### GooglePubsubSubscriptionTimeouts <a name="GooglePubsubSubscriptionTimeouts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionTimeouts;

GooglePubsubSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubSubscriptionBigqueryConfigOutputReference <a name="GooglePubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionBigqueryConfigOutputReference;

new GooglePubsubSubscriptionBigqueryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">resetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">resetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDropUnknownFields` <a name="resetDropUnknownFields" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```java
public void resetDropUnknownFields()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetUseTableSchema` <a name="resetUseTableSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```java
public void resetUseTableSchema()
```

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```java
public void resetUseTopicSchema()
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```java
public void resetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">dropUnknownFieldsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">useTableSchemaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">dropUnknownFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">useTableSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dropUnknownFieldsInput`<sup>Optional</sup> <a name="dropUnknownFieldsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```java
public java.lang.Boolean|IResolvable getDropUnknownFieldsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `useTableSchemaInput`<sup>Optional</sup> <a name="useTableSchemaInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTableSchemaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchemaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dropUnknownFields`<sup>Required</sup> <a name="dropUnknownFields" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```java
public java.lang.Boolean|IResolvable getDropUnknownFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `useTableSchema`<sup>Required</sup> <a name="useTableSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTableSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionBigqueryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference;

new GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">resetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">resetWriteMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseTopicSchema` <a name="resetUseTopicSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```java
public void resetUseTopicSchema()
```

##### `resetWriteMetadata` <a name="resetWriteMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```java
public void resetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">useTopicSchemaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useTopicSchemaInput`<sup>Optional</sup> <a name="useTopicSchemaInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchemaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```java
public java.lang.Boolean|IResolvable getUseTopicSchema();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigAvroConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference;

new GooglePubsubSubscriptionCloudStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">putAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putTextConfig">putTextConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">resetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">resetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">resetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">resetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">resetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">resetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">resetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetTextConfig">resetTextConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroConfig` <a name="putAvroConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```java
public void putAvroConfig(GooglePubsubSubscriptionCloudStorageConfigAvroConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `putTextConfig` <a name="putTextConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putTextConfig"></a>

```java
public void putTextConfig(GooglePubsubSubscriptionCloudStorageConfigTextConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putTextConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a>

---

##### `resetAvroConfig` <a name="resetAvroConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```java
public void resetAvroConfig()
```

##### `resetFilenameDatetimeFormat` <a name="resetFilenameDatetimeFormat" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```java
public void resetFilenameDatetimeFormat()
```

##### `resetFilenamePrefix` <a name="resetFilenamePrefix" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```java
public void resetFilenamePrefix()
```

##### `resetFilenameSuffix` <a name="resetFilenameSuffix" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```java
public void resetFilenameSuffix()
```

##### `resetMaxBytes` <a name="resetMaxBytes" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```java
public void resetMaxBytes()
```

##### `resetMaxDuration` <a name="resetMaxDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```java
public void resetMaxDuration()
```

##### `resetMaxMessages` <a name="resetMaxMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```java
public void resetMaxMessages()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetTextConfig` <a name="resetTextConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetTextConfig"></a>

```java
public void resetTextConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">avroConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.textConfig">textConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">avroConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">filenameDatetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">filenamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">filenameSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">maxBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">maxDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">maxMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.textConfigInput">textConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">filenameDatetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">filenamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">filenameSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">maxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">maxDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">maxMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avroConfig`<sup>Required</sup> <a name="avroConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference getAvroConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `textConfig`<sup>Required</sup> <a name="textConfig" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.textConfig"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference getTextConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference</a>

---

##### `avroConfigInput`<sup>Optional</sup> <a name="avroConfigInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigAvroConfig getAvroConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `filenameDatetimeFormatInput`<sup>Optional</sup> <a name="filenameDatetimeFormatInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```java
public java.lang.String getFilenameDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `filenamePrefixInput`<sup>Optional</sup> <a name="filenamePrefixInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```java
public java.lang.String getFilenamePrefixInput();
```

- *Type:* java.lang.String

---

##### `filenameSuffixInput`<sup>Optional</sup> <a name="filenameSuffixInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```java
public java.lang.String getFilenameSuffixInput();
```

- *Type:* java.lang.String

---

##### `maxBytesInput`<sup>Optional</sup> <a name="maxBytesInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```java
public java.lang.Number getMaxBytesInput();
```

- *Type:* java.lang.Number

---

##### `maxDurationInput`<sup>Optional</sup> <a name="maxDurationInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```java
public java.lang.String getMaxDurationInput();
```

- *Type:* java.lang.String

---

##### `maxMessagesInput`<sup>Optional</sup> <a name="maxMessagesInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```java
public java.lang.Number getMaxMessagesInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `textConfigInput`<sup>Optional</sup> <a name="textConfigInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.textConfigInput"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigTextConfig getTextConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `filenameDatetimeFormat`<sup>Required</sup> <a name="filenameDatetimeFormat" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```java
public java.lang.String getFilenameDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `filenamePrefix`<sup>Required</sup> <a name="filenamePrefix" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```java
public java.lang.String getFilenamePrefix();
```

- *Type:* java.lang.String

---

##### `filenameSuffix`<sup>Required</sup> <a name="filenameSuffix" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```java
public java.lang.String getFilenameSuffix();
```

- *Type:* java.lang.String

---

##### `maxBytes`<sup>Required</sup> <a name="maxBytes" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```java
public java.lang.Number getMaxBytes();
```

- *Type:* java.lang.Number

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```java
public java.lang.String getMaxDuration();
```

- *Type:* java.lang.String

---

##### `maxMessages`<sup>Required</sup> <a name="maxMessages" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```java
public java.lang.Number getMaxMessages();
```

- *Type:* java.lang.Number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference;

new GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionCloudStorageConfigTextConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigTextConfig">GooglePubsubSubscriptionCloudStorageConfigTextConfig</a>

---


### GooglePubsubSubscriptionDeadLetterPolicyOutputReference <a name="GooglePubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference;

new GooglePubsubSubscriptionDeadLetterPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">resetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">resetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeadLetterTopic` <a name="resetDeadLetterTopic" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```java
public void resetDeadLetterTopic()
```

##### `resetMaxDeliveryAttempts` <a name="resetMaxDeliveryAttempts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```java
public void resetMaxDeliveryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">deadLetterTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">maxDeliveryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">deadLetterTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterTopicInput`<sup>Optional</sup> <a name="deadLetterTopicInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```java
public java.lang.String getDeadLetterTopicInput();
```

- *Type:* java.lang.String

---

##### `maxDeliveryAttemptsInput`<sup>Optional</sup> <a name="maxDeliveryAttemptsInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```java
public java.lang.Number getMaxDeliveryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `deadLetterTopic`<sup>Required</sup> <a name="deadLetterTopic" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```java
public java.lang.String getDeadLetterTopic();
```

- *Type:* java.lang.String

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionDeadLetterPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---


### GooglePubsubSubscriptionExpirationPolicyOutputReference <a name="GooglePubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionExpirationPolicyOutputReference;

new GooglePubsubSubscriptionExpirationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionExpirationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---


### GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference <a name="GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference;

new GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.putUnstructuredInference">putUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetUnstructuredInference">resetUnstructuredInference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnstructuredInference` <a name="putUnstructuredInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.putUnstructuredInference"></a>

```java
public void putUnstructuredInference(GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.putUnstructuredInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetUnstructuredInference` <a name="resetUnstructuredInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resetUnstructuredInference"></a>

```java
public void resetUnstructuredInference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput">unstructuredInferenceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unstructuredInference`<sup>Required</sup> <a name="unstructuredInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInference"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference getUnstructuredInference();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInferenceInput`<sup>Optional</sup> <a name="unstructuredInferenceInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference getUnstructuredInferenceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a>

---


### GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference <a name="GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference;

new GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">GooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---


### GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference <a name="GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference;

new GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionMessageTransformsJavascriptUdf getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a>

---


### GooglePubsubSubscriptionMessageTransformsList <a name="GooglePubsubSubscriptionMessageTransformsList" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsList;

new GooglePubsubSubscriptionMessageTransformsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.get"></a>

```java
public GooglePubsubSubscriptionMessageTransformsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GooglePubsubSubscriptionMessageTransforms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>>

---


### GooglePubsubSubscriptionMessageTransformsOutputReference <a name="GooglePubsubSubscriptionMessageTransformsOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionMessageTransformsOutputReference;

new GooglePubsubSubscriptionMessageTransformsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.putAiInference">putAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.putJavascriptUdf">putJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resetAiInference">resetAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resetJavascriptUdf">resetJavascriptUdf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAiInference` <a name="putAiInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.putAiInference"></a>

```java
public void putAiInference(GooglePubsubSubscriptionMessageTransformsAiInference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.putAiInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a>

---

##### `putJavascriptUdf` <a name="putJavascriptUdf" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.putJavascriptUdf"></a>

```java
public void putJavascriptUdf(GooglePubsubSubscriptionMessageTransformsJavascriptUdf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.putJavascriptUdf.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a>

---

##### `resetAiInference` <a name="resetAiInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resetAiInference"></a>

```java
public void resetAiInference()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetJavascriptUdf` <a name="resetJavascriptUdf" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.resetJavascriptUdf"></a>

```java
public void resetJavascriptUdf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference">GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference">GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.aiInferenceInput">aiInferenceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdfInput">javascriptUdfInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiInference`<sup>Required</sup> <a name="aiInference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.aiInference"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference getAiInference();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference">GooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference</a>

---

##### `javascriptUdf`<sup>Required</sup> <a name="javascriptUdf" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdf"></a>

```java
public GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference getJavascriptUdf();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference">GooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference</a>

---

##### `aiInferenceInput`<sup>Optional</sup> <a name="aiInferenceInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.aiInferenceInput"></a>

```java
public GooglePubsubSubscriptionMessageTransformsAiInference getAiInferenceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsAiInference">GooglePubsubSubscriptionMessageTransformsAiInference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `javascriptUdfInput`<sup>Optional</sup> <a name="javascriptUdfInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdfInput"></a>

```java
public GooglePubsubSubscriptionMessageTransformsJavascriptUdf getJavascriptUdfInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsJavascriptUdf">GooglePubsubSubscriptionMessageTransformsJavascriptUdf</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransformsOutputReference.property.internalValue"></a>

```java
public IResolvable|GooglePubsubSubscriptionMessageTransforms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionMessageTransforms">GooglePubsubSubscriptionMessageTransforms</a>

---


### GooglePubsubSubscriptionPushConfigNoWrapperOutputReference <a name="GooglePubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference;

new GooglePubsubSubscriptionPushConfigNoWrapperOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">writeMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `writeMetadataInput`<sup>Optional</sup> <a name="writeMetadataInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```java
public java.lang.Boolean|IResolvable getWriteMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionPushConfigNoWrapper getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---


### GooglePubsubSubscriptionPushConfigOidcTokenOutputReference <a name="GooglePubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference;

new GooglePubsubSubscriptionPushConfigOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionPushConfigOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---


### GooglePubsubSubscriptionPushConfigOutputReference <a name="GooglePubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionPushConfigOutputReference;

new GooglePubsubSubscriptionPushConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper">putNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetNoWrapper">resetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNoWrapper` <a name="putNoWrapper" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```java
public void putNoWrapper(GooglePubsubSubscriptionPushConfigNoWrapper value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```java
public void putOidcToken(GooglePubsubSubscriptionPushConfigOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetNoWrapper` <a name="resetNoWrapper" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```java
public void resetNoWrapper()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper">noWrapper</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference">GooglePubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference">GooglePubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">noWrapperInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">pushEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">pushEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noWrapper`<sup>Required</sup> <a name="noWrapper" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```java
public GooglePubsubSubscriptionPushConfigNoWrapperOutputReference getNoWrapper();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference">GooglePubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```java
public GooglePubsubSubscriptionPushConfigOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference">GooglePubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `noWrapperInput`<sup>Optional</sup> <a name="noWrapperInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```java
public GooglePubsubSubscriptionPushConfigNoWrapper getNoWrapperInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```java
public GooglePubsubSubscriptionPushConfigOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---

##### `pushEndpointInput`<sup>Optional</sup> <a name="pushEndpointInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```java
public java.lang.String getPushEndpointInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```java
public java.lang.String getPushEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionPushConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---


### GooglePubsubSubscriptionRetryPolicyOutputReference <a name="GooglePubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionRetryPolicyOutputReference;

new GooglePubsubSubscriptionRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```java
public void resetMaximumBackoff()
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```java
public void resetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```java
public java.lang.String getMaximumBackoffInput();
```

- *Type:* java.lang.String

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```java
public java.lang.String getMinimumBackoffInput();
```

- *Type:* java.lang.String

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```java
public GooglePubsubSubscriptionRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---


### GooglePubsubSubscriptionTimeoutsOutputReference <a name="GooglePubsubSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_pubsub_subscription.GooglePubsubSubscriptionTimeoutsOutputReference;

new GooglePubsubSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GooglePubsubSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---



