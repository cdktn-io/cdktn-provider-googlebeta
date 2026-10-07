# `googleBigqueryAnalyticsHubListingSubscription` Submodule <a name="`googleBigqueryAnalyticsHubListingSubscription` Submodule" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubListingSubscription <a name="GoogleBigqueryAnalyticsHubListingSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription google_bigquery_analytics_hub_listing_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscription(scope Construct, id *string, config GoogleBigqueryAnalyticsHubListingSubscriptionConfig) GoogleBigqueryAnalyticsHubListingSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig">GoogleBigqueryAnalyticsHubListingSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig">GoogleBigqueryAnalyticsHubListingSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putDestinationDataset">PutDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription">PutDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetDestinationDataset">ResetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription">ResetDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationDataset` <a name="PutDestinationDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putDestinationDataset"></a>

```go
func PutDestinationDataset(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `PutDestinationPubsubSubscription` <a name="PutDestinationPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription"></a>

```go
func PutDestinationPubsubSubscription(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts">GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDestinationDataset` <a name="ResetDestinationDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetDestinationDataset"></a>

```go
func ResetDestinationDataset()
```

##### `ResetDestinationPubsubSubscription` <a name="ResetDestinationPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription"></a>

```go
func ResetDestinationPubsubSubscription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubListingSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryAnalyticsHubListingSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubListingSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.commercialInfo">CommercialInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription">DestinationPubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.lastModifyTime">LastModifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap">LinkedDatasetMap</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.linkedResources">LinkedResources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail">LogLinkedDatasetQueryUserEmail</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.organizationDisplayName">OrganizationDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.subscriberContact">SubscriberContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput">DestinationDatasetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput">DestinationPubsubSubscriptionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommercialInfo`<sup>Required</sup> <a name="CommercialInfo" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.commercialInfo"></a>

```go
func CommercialInfo() GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DestinationDataset`<sup>Required</sup> <a name="DestinationDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationDataset"></a>

```go
func DestinationDataset() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a>

---

##### `DestinationPubsubSubscription`<sup>Required</sup> <a name="DestinationPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription"></a>

```go
func DestinationPubsubSubscription() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a>

---

##### `LastModifyTime`<sup>Required</sup> <a name="LastModifyTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.lastModifyTime"></a>

```go
func LastModifyTime() *string
```

- *Type:* *string

---

##### `LinkedDatasetMap`<sup>Required</sup> <a name="LinkedDatasetMap" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap"></a>

```go
func LinkedDatasetMap() GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a>

---

##### `LinkedResources`<sup>Required</sup> <a name="LinkedResources" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.linkedResources"></a>

```go
func LinkedResources() GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a>

---

##### `LogLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="LogLinkedDatasetQueryUserEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```go
func LogLinkedDatasetQueryUserEmail() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationDisplayName`<sup>Required</sup> <a name="OrganizationDisplayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.organizationDisplayName"></a>

```go
func OrganizationDisplayName() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscriberContact`<sup>Required</sup> <a name="SubscriberContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.subscriberContact"></a>

```go
func SubscriberContact() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DestinationDatasetInput`<sup>Optional</sup> <a name="DestinationDatasetInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput"></a>

```go
func DestinationDatasetInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `DestinationPubsubSubscriptionInput`<sup>Optional</sup> <a name="DestinationPubsubSubscriptionInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput"></a>

```go
func DestinationPubsubSubscriptionInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo <a name="GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo {

}
```


### GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace <a name="GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace {

}
```


### GoogleBigqueryAnalyticsHubListingSubscriptionConfig <a name="GoogleBigqueryAnalyticsHubListingSubscriptionConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	ListingId: *string,
	Location: *string,
	DeletionPolicy: *string,
	DestinationDataset: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset,
	DestinationPubsubSubscription: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.listingId">ListingId</a></code> | <code>*string</code> | The ID of the listing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the data exchange. Distinct from the location of the destination data set. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription">DestinationPubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | destination_pubsub_subscription block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#id GoogleBigqueryAnalyticsHubListingSubscription#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#project GoogleBigqueryAnalyticsHubListingSubscription#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts">GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#data_exchange_id GoogleBigqueryAnalyticsHubListingSubscription#data_exchange_id}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#listing_id GoogleBigqueryAnalyticsHubListingSubscription#listing_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the data exchange. Distinct from the location of the destination data set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#location GoogleBigqueryAnalyticsHubListingSubscription#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#deletion_policy GoogleBigqueryAnalyticsHubListingSubscription#deletion_policy}

---

##### `DestinationDataset`<sup>Optional</sup> <a name="DestinationDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset"></a>

```go
DestinationDataset GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#destination_dataset GoogleBigqueryAnalyticsHubListingSubscription#destination_dataset}

---

##### `DestinationPubsubSubscription`<sup>Optional</sup> <a name="DestinationPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription"></a>

```go
DestinationPubsubSubscription GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

destination_pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#destination_pubsub_subscription GoogleBigqueryAnalyticsHubListingSubscription#destination_pubsub_subscription}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#id GoogleBigqueryAnalyticsHubListingSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#project GoogleBigqueryAnalyticsHubListingSubscription#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts">GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#timeouts GoogleBigqueryAnalyticsHubListingSubscription#timeouts}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset {
	DatasetReference: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference,
	Location: *string,
	Description: *string,
	FriendlyName: *string,
	Labels: *map[string]*string,
	ReplicaLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location">Location</a></code> | <code>*string</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description">Description</a></code> | <code>*string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations">ReplicaLocations</a></code> | <code>*[]*string</code> | List of regions where the subscriber wants dataset replicas. |

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference"></a>

```go
DatasetReference GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#dataset_reference GoogleBigqueryAnalyticsHubListingSubscription#dataset_reference}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#location GoogleBigqueryAnalyticsHubListingSubscription#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#description GoogleBigqueryAnalyticsHubListingSubscription#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#friendly_name GoogleBigqueryAnalyticsHubListingSubscription#friendly_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#labels GoogleBigqueryAnalyticsHubListingSubscription#labels}

---

##### `ReplicaLocations`<sup>Optional</sup> <a name="ReplicaLocations" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations"></a>

```go
ReplicaLocations *[]*string
```

- *Type:* *[]*string

List of regions where the subscriber wants dataset replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#replica_locations GoogleBigqueryAnalyticsHubListingSubscription#replica_locations}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference {
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this dataset. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#dataset_id GoogleBigqueryAnalyticsHubListingSubscription#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#project_id GoogleBigqueryAnalyticsHubListingSubscription#project_id}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription {
	PubsubSubscription: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription">PubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | pubsub_subscription block. |

---

##### `PubsubSubscription`<sup>Required</sup> <a name="PubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription"></a>

```go
PubsubSubscription GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#pubsub_subscription GoogleBigqueryAnalyticsHubListingSubscription#pubsub_subscription}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription {
	Name: *string,
	AckDeadlineSeconds: *f64,
	BigqueryConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig,
	CloudStorageConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig,
	DeadLetterPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy,
	Detached: interface{},
	EnableExactlyOnceDelivery: interface{},
	EnableMessageOrdering: interface{},
	ExpirationPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy,
	Filter: *string,
	Labels: *map[string]*string,
	MessageRetentionDuration: *string,
	PushConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig,
	RetainAckedMessages: interface{},
	RetryPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name">Name</a></code> | <code>*string</code> | Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>*f64</code> | The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached">Detached</a></code> | <code>interface{}</code> | Indicates whether the subscription is detached from its topic. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>interface{}</code> | If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>interface{}</code> | If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter">Filter</a></code> | <code>*string</code> | An expression written in the Pub/Sub filter language. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels">Labels</a></code> | <code>*map[string]*string</code> | See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>*string</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>interface{}</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#name GoogleBigqueryAnalyticsHubListingSubscription#name}

---

##### `AckDeadlineSeconds`<sup>Optional</sup> <a name="AckDeadlineSeconds" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds"></a>

```go
AckDeadlineSeconds *f64
```

- *Type:* *f64

The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message.

In the interval after the message is delivered
and before it is acknowledged, it is considered to be outstanding. During that time period, the
message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is
used as the initial value for the ack deadline. To override this value for a given message, call
'ModifyAckDeadline' with the corresponding 'ack_id' if using non-streaming pull or send the
'ack_id' in a 'StreamingModifyAckDeadlineRequest' if using streaming pull. The minimum custom
deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600
seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push
delivery, this value is also used to set the request timeout for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver
the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#ack_deadline_seconds GoogleBigqueryAnalyticsHubListingSubscription#ack_deadline_seconds}

---

##### `BigqueryConfig`<sup>Optional</sup> <a name="BigqueryConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig"></a>

```go
BigqueryConfig GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#bigquery_config GoogleBigqueryAnalyticsHubListingSubscription#bigquery_config}

---

##### `CloudStorageConfig`<sup>Optional</sup> <a name="CloudStorageConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig"></a>

```go
CloudStorageConfig GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#cloud_storage_config GoogleBigqueryAnalyticsHubListingSubscription#cloud_storage_config}

---

##### `DeadLetterPolicy`<sup>Optional</sup> <a name="DeadLetterPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy"></a>

```go
DeadLetterPolicy GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#dead_letter_policy GoogleBigqueryAnalyticsHubListingSubscription#dead_letter_policy}

---

##### `Detached`<sup>Optional</sup> <a name="Detached" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached"></a>

```go
Detached interface{}
```

- *Type:* interface{}

Indicates whether the subscription is detached from its topic.

Detached subscriptions don't
receive messages from their topic and don't retain any backlog. 'Pull' and 'StreamingPull'
requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes
to the endpoint will not be made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#detached GoogleBigqueryAnalyticsHubListingSubscription#detached}

---

##### `EnableExactlyOnceDelivery`<sup>Optional</sup> <a name="EnableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery"></a>

```go
EnableExactlyOnceDelivery interface{}
```

- *Type:* interface{}

If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

An acknowledged message will
not be resent to a subscriber. Note that subscribers may still receive multiple copies of a
message when 'enableExactlyOnceDelivery' is true if the message was published multiple times by
a publisher client. These copies are considered distinct by Pub/Sub and have distinct 'message_id'
values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#enable_exactly_once_delivery GoogleBigqueryAnalyticsHubListingSubscription#enable_exactly_once_delivery}

---

##### `EnableMessageOrdering`<sup>Optional</sup> <a name="EnableMessageOrdering" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering"></a>

```go
EnableMessageOrdering interface{}
```

- *Type:* interface{}

If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#enable_message_ordering GoogleBigqueryAnalyticsHubListingSubscription#enable_message_ordering}

---

##### `ExpirationPolicy`<sup>Optional</sup> <a name="ExpirationPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy"></a>

```go
ExpirationPolicy GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#expiration_policy GoogleBigqueryAnalyticsHubListingSubscription#expiration_policy}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An expression written in the Pub/Sub filter language.

If non-empty, then only 'PubsubMessage's
whose 'attributes' field matches the filter are delivered on this subscription. If empty, then
no messages are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#filter GoogleBigqueryAnalyticsHubListingSubscription#filter}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#labels GoogleBigqueryAnalyticsHubListingSubscription#labels}

---

##### `MessageRetentionDuration`<sup>Optional</sup> <a name="MessageRetentionDuration" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration"></a>

```go
MessageRetentionDuration *string
```

- *Type:* *string

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If 'retainAckedMessages' is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults
to 7 days. Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#message_retention_duration GoogleBigqueryAnalyticsHubListingSubscription#message_retention_duration}

---

##### `PushConfig`<sup>Optional</sup> <a name="PushConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig"></a>

```go
PushConfig GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#push_config GoogleBigqueryAnalyticsHubListingSubscription#push_config}

---

##### `RetainAckedMessages`<sup>Optional</sup> <a name="RetainAckedMessages" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages"></a>

```go
RetainAckedMessages interface{}
```

- *Type:* interface{}

Indicates whether to retain acknowledged messages.

If true, then messages are not expunged from
the subscription's backlog, even if they are acknowledged, until they fall out of the
'messageRetentionDuration' window. This must be true if you would like to Seek to a timestamp
in the past to replay previously-acknowledged messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#retain_acked_messages GoogleBigqueryAnalyticsHubListingSubscription#retain_acked_messages}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy"></a>

```go
RetryPolicy GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#retry_policy GoogleBigqueryAnalyticsHubListingSubscription#retry_policy}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig {
	DropUnknownFields: interface{},
	ServiceAccountEmail: *string,
	Table: *string,
	UseTableSchema: interface{},
	UseTopicSchema: interface{},
	WriteMetadata: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields">DropUnknownFields</a></code> | <code>interface{}</code> | When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The service account to use to write to BigQuery. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table">Table</a></code> | <code>*string</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema">UseTableSchema</a></code> | <code>interface{}</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. |

---

##### `DropUnknownFields`<sup>Optional</sup> <a name="DropUnknownFields" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```go
DropUnknownFields interface{}
```

- *Type:* interface{}

When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas
must be kept in sync and any messages with extra fields are not written and remain in the
subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#drop_unknown_fields GoogleBigqueryAnalyticsHubListingSubscription#drop_unknown_fields}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The service account to use to write to BigQuery.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#service_account_email GoogleBigqueryAnalyticsHubListingSubscription#service_account_email}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#table GoogleBigqueryAnalyticsHubListingSubscription#table}

---

##### `UseTableSchema`<sup>Optional</sup> <a name="UseTableSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```go
UseTableSchema interface{}
```

- *Type:* interface{}

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

'useTableSchema' and 'useTopicSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#use_table_schema GoogleBigqueryAnalyticsHubListingSubscription#use_table_schema}

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```go
UseTopicSchema interface{}
```

- *Type:* interface{}

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

'useTopicSchema' and 'useTableSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#use_topic_schema GoogleBigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```go
WriteMetadata interface{}
```

- *Type:* interface{}

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table.

The subscription name, message_id, and publish_time fields
are put in their own columns while all other message properties (other than data) are written
to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#write_metadata GoogleBigqueryAnalyticsHubListingSubscription#write_metadata}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig {
	AvroConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig,
	Bucket: *string,
	FilenameDatetimeFormat: *string,
	FilenamePrefix: *string,
	FilenameSuffix: *string,
	MaxBytes: *string,
	MaxDuration: *string,
	MaxMessages: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket">Bucket</a></code> | <code>*string</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>*string</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names). |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix">FilenamePrefix</a></code> | <code>*string</code> | User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix">FilenameSuffix</a></code> | <code>*string</code> | User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes">MaxBytes</a></code> | <code>*string</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration">MaxDuration</a></code> | <code>*string</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages">MaxMessages</a></code> | <code>*string</code> | The maximum number of messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The service account to use to write to Cloud Storage. |

---

##### `AvroConfig`<sup>Optional</sup> <a name="AvroConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```go
AvroConfig GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#avro_config GoogleBigqueryAnalyticsHubListingSubscription#avro_config}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user.
The bucket name must be without any prefix like "gs://". See the
[bucket naming requirements](https://cloud.google.com/storage/docs/buckets#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#bucket GoogleBigqueryAnalyticsHubListingSubscription#bucket}

---

##### `FilenameDatetimeFormat`<sup>Optional</sup> <a name="FilenameDatetimeFormat" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```go
FilenameDatetimeFormat *string
```

- *Type:* *string

User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#filename_datetime_format GoogleBigqueryAnalyticsHubListingSubscription#filename_datetime_format}

---

##### `FilenamePrefix`<sup>Optional</sup> <a name="FilenamePrefix" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```go
FilenamePrefix *string
```

- *Type:* *string

User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#filename_prefix GoogleBigqueryAnalyticsHubListingSubscription#filename_prefix}

---

##### `FilenameSuffix`<sup>Optional</sup> <a name="FilenameSuffix" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```go
FilenameSuffix *string
```

- *Type:* *string

User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#filename_suffix GoogleBigqueryAnalyticsHubListingSubscription#filename_suffix}

---

##### `MaxBytes`<sup>Optional</sup> <a name="MaxBytes" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```go
MaxBytes *string
```

- *Type:* *string

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB. The maxBytes limit may be exceeded in cases where messages are larger
than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#max_bytes GoogleBigqueryAnalyticsHubListingSubscription#max_bytes}

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```go
MaxDuration *string
```

- *Type:* *string

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's
acknowledgement deadline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#max_duration GoogleBigqueryAnalyticsHubListingSubscription#max_duration}

---

##### `MaxMessages`<sup>Optional</sup> <a name="MaxMessages" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```go
MaxMessages *string
```

- *Type:* *string

The maximum number of messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#max_messages GoogleBigqueryAnalyticsHubListingSubscription#max_messages}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The service account to use to write to Cloud Storage.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#service_account_email GoogleBigqueryAnalyticsHubListingSubscription#service_account_email}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig {
	UseTopicSchema: interface{},
	WriteMetadata: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. |

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```go
UseTopicSchema interface{}
```

- *Type:* interface{}

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#use_topic_schema GoogleBigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```go
WriteMetadata interface{}
```

- *Type:* interface{}

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output.

The subscription name, message_id, and publish_time fields
are put in their own fields while all other message properties other than data (for example,
an ordering_key, if present) are added as entries in the attributes map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#write_metadata GoogleBigqueryAnalyticsHubListingSubscription#write_metadata}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy {
	DeadLetterTopic: *string,
	MaxDeliveryAttempts: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>*string</code> | The name of the topic to which dead letter messages should be published. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>*f64</code> | The maximum number of delivery attempts for any message. |

---

##### `DeadLetterTopic`<sup>Optional</sup> <a name="DeadLetterTopic" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```go
DeadLetterTopic *string
```

- *Type:* *string

The name of the topic to which dead letter messages should be published.

Format is
'projects/{project}/topics/{topic}'. The Pub/Sub service account associated with the enclosing
subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com)
must have permission to Publish() to this topic. The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic since messages published to
a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#dead_letter_topic GoogleBigqueryAnalyticsHubListingSubscription#dead_letter_topic}

---

##### `MaxDeliveryAttempts`<sup>Optional</sup> <a name="MaxDeliveryAttempts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```go
MaxDeliveryAttempts *f64
```

- *Type:* *f64

The maximum number of delivery attempts for any message.

The value must be between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times
the acknowledgement deadline has been exceeded for the message). A NACK is any call to
ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend
ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a
default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#max_delivery_attempts GoogleBigqueryAnalyticsHubListingSubscription#max_delivery_attempts}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy {
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl">Ttl</a></code> | <code>*string</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Specifies the "time-to-live" duration for an associated resource.

The resource expires if it
is not active for a period of 'ttl'. The definition of "activity" depends on the type of the
associated resource. The minimum and maximum allowed values for 'ttl' depend on the type of
the associated resource, as well. If 'ttl' is not set, the associated resource never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#ttl GoogleBigqueryAnalyticsHubListingSubscription#ttl}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig {
	Attributes: *map[string]*string,
	NoWrapper: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper,
	OidcToken: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken,
	PushEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | Endpoint configuration attributes that can be used to control different aspects of the message delivery. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint">PushEndpoint</a></code> | <code>*string</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes"></a>

```go
Attributes *map[string]*string
```

- *Type:* *map[string]*string

Endpoint configuration attributes that can be used to control different aspects of the message delivery.

The only currently supported attribute is 'x-goog-version', which you can use to change the format of the
pushed message. This attribute indicates the version of the data expected by the endpoint. This controls
the shape of the pushed message (i.e., its fields and metadata). If not present during the
'CreateSubscription' call, it will default to the version of the Pub/Sub API used to make such call.
If not present in a 'ModifyPushConfig' call, its value will not be changed. 'GetSubscription' calls
will always return a valid version, even if the subscription was created without this attribute.
The only supported values for the 'x-goog-version' attribute are: 'v1beta1': uses the push format
defined in the v1beta1 Pub/Sub API. 'v1' or 'v1beta2': uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#attributes GoogleBigqueryAnalyticsHubListingSubscription#attributes}

---

##### `NoWrapper`<sup>Optional</sup> <a name="NoWrapper" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper"></a>

```go
NoWrapper GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#no_wrapper GoogleBigqueryAnalyticsHubListingSubscription#no_wrapper}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken"></a>

```go
OidcToken GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#oidc_token GoogleBigqueryAnalyticsHubListingSubscription#oidc_token}

---

##### `PushEndpoint`<sup>Optional</sup> <a name="PushEndpoint" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```go
PushEndpoint *string
```

- *Type:* *string

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#push_endpoint GoogleBigqueryAnalyticsHubListingSubscription#push_endpoint}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper {
	WriteMetadata: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```go
WriteMetadata interface{}
```

- *Type:* interface{}

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#write_metadata GoogleBigqueryAnalyticsHubListingSubscription#write_metadata}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken {
	Audience: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience">Audience</a></code> | <code>*string</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions. |

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience to be used when generating OIDC token.

The audience claim identifies the recipients
that the JWT is intended for. The audience value is a single case-sensitive string. Having
multiple values (array) for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified,
the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#audience GoogleBigqueryAnalyticsHubListingSubscription#audience}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#service_account_email GoogleBigqueryAnalyticsHubListingSubscription#service_account_email}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy {
	MaximumBackoff: *string,
	MinimumBackoff: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff">MaximumBackoff</a></code> | <code>*string</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff">MinimumBackoff</a></code> | <code>*string</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `MaximumBackoff`<sup>Optional</sup> <a name="MaximumBackoff" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```go
MaximumBackoff *string
```

- *Type:* *string

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#maximum_backoff GoogleBigqueryAnalyticsHubListingSubscription#maximum_backoff}

---

##### `MinimumBackoff`<sup>Optional</sup> <a name="MinimumBackoff" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```go
MinimumBackoff *string
```

- *Type:* *string

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#minimum_backoff GoogleBigqueryAnalyticsHubListingSubscription#minimum_backoff}

---

### GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap <a name="GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap {

}
```


### GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources <a name="GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources {

}
```


### GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts <a name="GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

&googlebigqueryanalyticshublistingsubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#create GoogleBigqueryAnalyticsHubListingSubscription#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#delete GoogleBigqueryAnalyticsHubListingSubscription#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#create GoogleBigqueryAnalyticsHubListingSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_analytics_hub_listing_subscription#delete GoogleBigqueryAnalyticsHubListingSubscription#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList <a name="GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get"></a>

```go
func Get(index *f64) GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList <a name="GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get"></a>

```go
func Get(index *f64) GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace">CloudMarketplace</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudMarketplace`<sup>Required</sup> <a name="CloudMarketplace" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace"></a>

```go
func CloudMarketplace() GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo">GoogleBigqueryAnalyticsHubListingSubscriptionCommercialInfo</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference">PutDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations">ResetReplicaLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetReference` <a name="PutDatasetReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```go
func PutDatasetReference(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetReplicaLocations` <a name="ResetReplicaLocations" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations"></a>

```go
func ResetReplicaLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">DatasetReferenceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput">ReplicaLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations">ReplicaLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```go
func DatasetReference() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `DatasetReferenceInput`<sup>Optional</sup> <a name="DatasetReferenceInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```go
func DatasetReferenceInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ReplicaLocationsInput`<sup>Optional</sup> <a name="ReplicaLocationsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput"></a>

```go
func ReplicaLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ReplicaLocations`<sup>Required</sup> <a name="ReplicaLocations" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations"></a>

```go
func ReplicaLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription">PutPubsubSubscription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubSubscription` <a name="PutPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription"></a>

```go
func PutPubsubSubscription(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription">PubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput">PubsubSubscriptionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubSubscription`<sup>Required</sup> <a name="PubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription"></a>

```go
func PubsubSubscription() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a>

---

##### `PubsubSubscriptionInput`<sup>Optional</sup> <a name="PubsubSubscriptionInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput"></a>

```go
func PubsubSubscriptionInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">ResetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">ResetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDropUnknownFields` <a name="ResetDropUnknownFields" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```go
func ResetDropUnknownFields()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable"></a>

```go
func ResetTable()
```

##### `ResetUseTableSchema` <a name="ResetUseTableSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```go
func ResetUseTableSchema()
```

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```go
func ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```go
func ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">DropUnknownFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">UseTableSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">DropUnknownFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">UseTableSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DropUnknownFieldsInput`<sup>Optional</sup> <a name="DropUnknownFieldsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```go
func DropUnknownFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `UseTableSchemaInput`<sup>Optional</sup> <a name="UseTableSchemaInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```go
func UseTableSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```go
func UseTopicSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```go
func WriteMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `DropUnknownFields`<sup>Required</sup> <a name="DropUnknownFields" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```go
func DropUnknownFields() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `UseTableSchema`<sup>Required</sup> <a name="UseTableSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```go
func UseTableSchema() interface{}
```

- *Type:* interface{}

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```go
func UseTopicSchema() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```go
func WriteMetadata() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```go
func ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```go
func ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```go
func UseTopicSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```go
func WriteMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```go
func UseTopicSchema() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```go
func WriteMetadata() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">PutAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">ResetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">ResetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">ResetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">ResetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">ResetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">ResetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroConfig` <a name="PutAvroConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```go
func PutAvroConfig(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `ResetAvroConfig` <a name="ResetAvroConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```go
func ResetAvroConfig()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetFilenameDatetimeFormat` <a name="ResetFilenameDatetimeFormat" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```go
func ResetFilenameDatetimeFormat()
```

##### `ResetFilenamePrefix` <a name="ResetFilenamePrefix" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```go
func ResetFilenamePrefix()
```

##### `ResetFilenameSuffix` <a name="ResetFilenameSuffix" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```go
func ResetFilenameSuffix()
```

##### `ResetMaxBytes` <a name="ResetMaxBytes" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```go
func ResetMaxBytes()
```

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```go
func ResetMaxDuration()
```

##### `ResetMaxMessages` <a name="ResetMaxMessages" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```go
func ResetMaxMessages()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">AvroConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">FilenameDatetimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">FilenamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">FilenameSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">MaxBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">MaxMessagesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">FilenamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">FilenameSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">MaxBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">MaxDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">MaxMessages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvroConfig`<sup>Required</sup> <a name="AvroConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```go
func AvroConfig() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `AvroConfigInput`<sup>Optional</sup> <a name="AvroConfigInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```go
func AvroConfigInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `FilenameDatetimeFormatInput`<sup>Optional</sup> <a name="FilenameDatetimeFormatInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```go
func FilenameDatetimeFormatInput() *string
```

- *Type:* *string

---

##### `FilenamePrefixInput`<sup>Optional</sup> <a name="FilenamePrefixInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```go
func FilenamePrefixInput() *string
```

- *Type:* *string

---

##### `FilenameSuffixInput`<sup>Optional</sup> <a name="FilenameSuffixInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```go
func FilenameSuffixInput() *string
```

- *Type:* *string

---

##### `MaxBytesInput`<sup>Optional</sup> <a name="MaxBytesInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```go
func MaxBytesInput() *string
```

- *Type:* *string

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```go
func MaxDurationInput() *string
```

- *Type:* *string

---

##### `MaxMessagesInput`<sup>Optional</sup> <a name="MaxMessagesInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```go
func MaxMessagesInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `FilenameDatetimeFormat`<sup>Required</sup> <a name="FilenameDatetimeFormat" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```go
func FilenameDatetimeFormat() *string
```

- *Type:* *string

---

##### `FilenamePrefix`<sup>Required</sup> <a name="FilenamePrefix" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```go
func FilenamePrefix() *string
```

- *Type:* *string

---

##### `FilenameSuffix`<sup>Required</sup> <a name="FilenameSuffix" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```go
func FilenameSuffix() *string
```

- *Type:* *string

---

##### `MaxBytes`<sup>Required</sup> <a name="MaxBytes" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```go
func MaxBytes() *string
```

- *Type:* *string

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```go
func MaxDuration() *string
```

- *Type:* *string

---

##### `MaxMessages`<sup>Required</sup> <a name="MaxMessages" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```go
func MaxMessages() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">ResetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">ResetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeadLetterTopic` <a name="ResetDeadLetterTopic" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```go
func ResetDeadLetterTopic()
```

##### `ResetMaxDeliveryAttempts` <a name="ResetMaxDeliveryAttempts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```go
func ResetMaxDeliveryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">DeadLetterTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">MaxDeliveryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterTopicInput`<sup>Optional</sup> <a name="DeadLetterTopicInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```go
func DeadLetterTopicInput() *string
```

- *Type:* *string

---

##### `MaxDeliveryAttemptsInput`<sup>Optional</sup> <a name="MaxDeliveryAttemptsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```go
func MaxDeliveryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `DeadLetterTopic`<sup>Required</sup> <a name="DeadLetterTopic" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```go
func DeadLetterTopic() *string
```

- *Type:* *string

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```go
func MaxDeliveryAttempts() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig">PutBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig">PutCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy">PutDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy">PutExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig">PutPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds">ResetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig">ResetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig">ResetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy">ResetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached">ResetDetached</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery">ResetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering">ResetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy">ResetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration">ResetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig">ResetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages">ResetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryConfig` <a name="PutBigqueryConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig"></a>

```go
func PutBigqueryConfig(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `PutCloudStorageConfig` <a name="PutCloudStorageConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig"></a>

```go
func PutCloudStorageConfig(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `PutDeadLetterPolicy` <a name="PutDeadLetterPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy"></a>

```go
func PutDeadLetterPolicy(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `PutExpirationPolicy` <a name="PutExpirationPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy"></a>

```go
func PutExpirationPolicy(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `PutPushConfig` <a name="PutPushConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig"></a>

```go
func PutPushConfig(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy"></a>

```go
func PutRetryPolicy(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `ResetAckDeadlineSeconds` <a name="ResetAckDeadlineSeconds" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds"></a>

```go
func ResetAckDeadlineSeconds()
```

##### `ResetBigqueryConfig` <a name="ResetBigqueryConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig"></a>

```go
func ResetBigqueryConfig()
```

##### `ResetCloudStorageConfig` <a name="ResetCloudStorageConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig"></a>

```go
func ResetCloudStorageConfig()
```

##### `ResetDeadLetterPolicy` <a name="ResetDeadLetterPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy"></a>

```go
func ResetDeadLetterPolicy()
```

##### `ResetDetached` <a name="ResetDetached" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached"></a>

```go
func ResetDetached()
```

##### `ResetEnableExactlyOnceDelivery` <a name="ResetEnableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery"></a>

```go
func ResetEnableExactlyOnceDelivery()
```

##### `ResetEnableMessageOrdering` <a name="ResetEnableMessageOrdering" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering"></a>

```go
func ResetEnableMessageOrdering()
```

##### `ResetExpirationPolicy` <a name="ResetExpirationPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy"></a>

```go
func ResetExpirationPolicy()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMessageRetentionDuration` <a name="ResetMessageRetentionDuration" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration"></a>

```go
func ResetMessageRetentionDuration()
```

##### `ResetPushConfig` <a name="ResetPushConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig"></a>

```go
func ResetPushConfig()
```

##### `ResetRetainAckedMessages` <a name="ResetRetainAckedMessages" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages"></a>

```go
func ResetRetainAckedMessages()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput">AckDeadlineSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput">BigqueryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput">CloudStorageConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput">DeadLetterPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput">DetachedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput">EnableExactlyOnceDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput">EnableMessageOrderingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput">ExpirationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput">MessageRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput">PushConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput">RetainAckedMessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached">Detached</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryConfig`<sup>Required</sup> <a name="BigqueryConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig"></a>

```go
func BigqueryConfig() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `CloudStorageConfig`<sup>Required</sup> <a name="CloudStorageConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig"></a>

```go
func CloudStorageConfig() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `DeadLetterPolicy`<sup>Required</sup> <a name="DeadLetterPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy"></a>

```go
func DeadLetterPolicy() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `ExpirationPolicy`<sup>Required</sup> <a name="ExpirationPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy"></a>

```go
func ExpirationPolicy() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `PushConfig`<sup>Required</sup> <a name="PushConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig"></a>

```go
func PushConfig() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `AckDeadlineSecondsInput`<sup>Optional</sup> <a name="AckDeadlineSecondsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput"></a>

```go
func AckDeadlineSecondsInput() *f64
```

- *Type:* *f64

---

##### `BigqueryConfigInput`<sup>Optional</sup> <a name="BigqueryConfigInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput"></a>

```go
func BigqueryConfigInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `CloudStorageConfigInput`<sup>Optional</sup> <a name="CloudStorageConfigInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput"></a>

```go
func CloudStorageConfigInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `DeadLetterPolicyInput`<sup>Optional</sup> <a name="DeadLetterPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput"></a>

```go
func DeadLetterPolicyInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `DetachedInput`<sup>Optional</sup> <a name="DetachedInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput"></a>

```go
func DetachedInput() interface{}
```

- *Type:* interface{}

---

##### `EnableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="EnableExactlyOnceDeliveryInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput"></a>

```go
func EnableExactlyOnceDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMessageOrderingInput`<sup>Optional</sup> <a name="EnableMessageOrderingInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput"></a>

```go
func EnableMessageOrderingInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationPolicyInput`<sup>Optional</sup> <a name="ExpirationPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput"></a>

```go
func ExpirationPolicyInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MessageRetentionDurationInput`<sup>Optional</sup> <a name="MessageRetentionDurationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput"></a>

```go
func MessageRetentionDurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PushConfigInput`<sup>Optional</sup> <a name="PushConfigInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput"></a>

```go
func PushConfigInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `RetainAckedMessagesInput`<sup>Optional</sup> <a name="RetainAckedMessagesInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput"></a>

```go
func RetainAckedMessagesInput() interface{}
```

- *Type:* interface{}

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `AckDeadlineSeconds`<sup>Required</sup> <a name="AckDeadlineSeconds" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds"></a>

```go
func AckDeadlineSeconds() *f64
```

- *Type:* *f64

---

##### `Detached`<sup>Required</sup> <a name="Detached" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached"></a>

```go
func Detached() interface{}
```

- *Type:* interface{}

---

##### `EnableExactlyOnceDelivery`<sup>Required</sup> <a name="EnableExactlyOnceDelivery" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery"></a>

```go
func EnableExactlyOnceDelivery() interface{}
```

- *Type:* interface{}

---

##### `EnableMessageOrdering`<sup>Required</sup> <a name="EnableMessageOrdering" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering"></a>

```go
func EnableMessageOrdering() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MessageRetentionDuration`<sup>Required</sup> <a name="MessageRetentionDuration" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration"></a>

```go
func MessageRetentionDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetainAckedMessages`<sup>Required</sup> <a name="RetainAckedMessages" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages"></a>

```go
func RetainAckedMessages() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata"></a>

```go
func ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```go
func WriteMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```go
func WriteMetadata() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper">PutNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper">ResetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint">ResetPushEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNoWrapper` <a name="PutNoWrapper" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```go
func PutNoWrapper(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```go
func PutOidcToken(value GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetNoWrapper` <a name="ResetNoWrapper" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```go
func ResetNoWrapper()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetPushEndpoint` <a name="ResetPushEndpoint" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint"></a>

```go
func ResetPushEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput">AttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">NoWrapperInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">PushEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">PushEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoWrapper`<sup>Required</sup> <a name="NoWrapper" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```go
func NoWrapper() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```go
func OidcToken() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```go
func AttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NoWrapperInput`<sup>Optional</sup> <a name="NoWrapperInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```go
func NoWrapperInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```go
func OidcTokenInput() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `PushEndpointInput`<sup>Optional</sup> <a name="PushEndpointInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```go
func PushEndpointInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```go
func Attributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```go
func PushEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">ResetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">ResetMinimumBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBackoff` <a name="ResetMaximumBackoff" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```go
func ResetMaximumBackoff()
```

##### `ResetMinimumBackoff` <a name="ResetMinimumBackoff" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```go
func ResetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">MaximumBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">MinimumBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">MaximumBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">MinimumBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBackoffInput`<sup>Optional</sup> <a name="MaximumBackoffInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```go
func MaximumBackoffInput() *string
```

- *Type:* *string

---

##### `MinimumBackoffInput`<sup>Optional</sup> <a name="MinimumBackoffInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```go
func MinimumBackoffInput() *string
```

- *Type:* *string

---

##### `MaximumBackoff`<sup>Required</sup> <a name="MaximumBackoff" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```go
func MaximumBackoff() *string
```

- *Type:* *string

---

##### `MinimumBackoff`<sup>Required</sup> <a name="MinimumBackoff" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```go
func MinimumBackoff() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">GoogleBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList <a name="GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get"></a>

```go
func Get(index *f64) GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">LinkedPubsubSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing">Listing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```go
func LinkedDataset() *string
```

- *Type:* *string

---

##### `LinkedPubsubSubscription`<sup>Required</sup> <a name="LinkedPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```go
func LinkedPubsubSubscription() *string
```

- *Type:* *string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```go
func Listing() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList <a name="GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get"></a>

```go
func Get(index *f64) GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription">LinkedPubsubSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing">Listing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```go
func LinkedDataset() *string
```

- *Type:* *string

---

##### `LinkedPubsubSubscription`<sup>Required</sup> <a name="LinkedPubsubSubscription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription"></a>

```go
func LinkedPubsubSubscription() *string
```

- *Type:* *string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```go
func Listing() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubListingSubscriptionLinkedResources</a>

---


### GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigqueryanalyticshublistingsubscription"

googlebigqueryanalyticshublistingsubscription.NewGoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubListingSubscription.GoogleBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



