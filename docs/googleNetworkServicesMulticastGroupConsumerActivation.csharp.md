# `googleNetworkServicesMulticastGroupConsumerActivation` Submodule <a name="`googleNetworkServicesMulticastGroupConsumerActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastGroupConsumerActivation <a name="GoogleNetworkServicesMulticastGroupConsumerActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation google_network_services_multicast_group_consumer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivation(Construct Scope, string Id, GoogleNetworkServicesMulticastGroupConsumerActivationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig">GoogleNetworkServicesMulticastGroupConsumerActivationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig">GoogleNetworkServicesMulticastGroupConsumerActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.putLogConfig"></a>

```csharp
private void PutLogConfig(GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastGroupConsumerActivation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastGroupConsumerActivation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastGroupConsumerActivation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesMulticastGroupConsumerActivation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastGroupConsumerActivation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastGroupConsumerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastGroupConsumerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList">GoogleNetworkServicesMulticastGroupConsumerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput">MulticastConsumerAssociationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput">MulticastGroupConsumerActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput">MulticastGroupRangeActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation">MulticastConsumerAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId">MulticastGroupConsumerActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation">MulticastGroupRangeActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.logConfig"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.state"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList">GoogleNetworkServicesMulticastGroupConsumerActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.logConfigInput"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `MulticastConsumerAssociationInput`<sup>Optional</sup> <a name="MulticastConsumerAssociationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput"></a>

```csharp
public string MulticastConsumerAssociationInput { get; }
```

- *Type:* string

---

##### `MulticastGroupConsumerActivationIdInput`<sup>Optional</sup> <a name="MulticastGroupConsumerActivationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput"></a>

```csharp
public string MulticastGroupConsumerActivationIdInput { get; }
```

- *Type:* string

---

##### `MulticastGroupRangeActivationInput`<sup>Optional</sup> <a name="MulticastGroupRangeActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput"></a>

```csharp
public string MulticastGroupRangeActivationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastConsumerAssociation`<sup>Required</sup> <a name="MulticastConsumerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation"></a>

```csharp
public string MulticastConsumerAssociation { get; }
```

- *Type:* string

---

##### `MulticastGroupConsumerActivationId`<sup>Required</sup> <a name="MulticastGroupConsumerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId"></a>

```csharp
public string MulticastGroupConsumerActivationId { get; }
```

- *Type:* string

---

##### `MulticastGroupRangeActivation`<sup>Required</sup> <a name="MulticastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation"></a>

```csharp
public string MulticastGroupRangeActivation { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastGroupConsumerActivationConfig <a name="GoogleNetworkServicesMulticastGroupConsumerActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MulticastConsumerAssociation,
    string MulticastGroupConsumerActivationId,
    string MulticastGroupRangeActivation,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig LogConfig = null,
    string Project = null,
    GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation">MulticastConsumerAssociation</a></code> | <code>string</code> | The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId">MulticastGroupConsumerActivationId</a></code> | <code>string</code> | A unique name for the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation">MulticastGroupRangeActivation</a></code> | <code>string</code> | The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#id GoogleNetworkServicesMulticastGroupConsumerActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#project GoogleNetworkServicesMulticastGroupConsumerActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#location GoogleNetworkServicesMulticastGroupConsumerActivation#location}

---

##### `MulticastConsumerAssociation`<sup>Required</sup> <a name="MulticastConsumerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation"></a>

```csharp
public string MulticastConsumerAssociation { get; set; }
```

- *Type:* string

The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation.

Use the following format:
'projects/* /locations/* /multicastConsumerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#multicast_consumer_association GoogleNetworkServicesMulticastGroupConsumerActivation#multicast_consumer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastGroupConsumerActivationId`<sup>Required</sup> <a name="MulticastGroupConsumerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId"></a>

```csharp
public string MulticastGroupConsumerActivationId { get; set; }
```

- *Type:* string

A unique name for the multicast group consumer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#multicast_group_consumer_activation_id GoogleNetworkServicesMulticastGroupConsumerActivation#multicast_group_consumer_activation_id}

---

##### `MulticastGroupRangeActivation`<sup>Required</sup> <a name="MulticastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation"></a>

```csharp
public string MulticastGroupRangeActivation { get; set; }
```

- *Type:* string

The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#multicast_group_range_activation GoogleNetworkServicesMulticastGroupConsumerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#deletion_policy GoogleNetworkServicesMulticastGroupConsumerActivation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast group consumer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#description GoogleNetworkServicesMulticastGroupConsumerActivation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#id GoogleNetworkServicesMulticastGroupConsumerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#labels GoogleNetworkServicesMulticastGroupConsumerActivation#labels}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#log_config GoogleNetworkServicesMulticastGroupConsumerActivation#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#project GoogleNetworkServicesMulticastGroupConsumerActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#timeouts GoogleNetworkServicesMulticastGroupConsumerActivation#timeouts}

---

### GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig <a name="GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#enabled GoogleNetworkServicesMulticastGroupConsumerActivation#enabled}

---

### GoogleNetworkServicesMulticastGroupConsumerActivationState <a name="GoogleNetworkServicesMulticastGroupConsumerActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationState {

};
```


### GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts <a name="GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#create GoogleNetworkServicesMulticastGroupConsumerActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#delete GoogleNetworkServicesMulticastGroupConsumerActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#update GoogleNetworkServicesMulticastGroupConsumerActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#create GoogleNetworkServicesMulticastGroupConsumerActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#delete GoogleNetworkServicesMulticastGroupConsumerActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_consumer_activation#update GoogleNetworkServicesMulticastGroupConsumerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference <a name="GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig">GoogleNetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---


### GoogleNetworkServicesMulticastGroupConsumerActivationStateList <a name="GoogleNetworkServicesMulticastGroupConsumerActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.get"></a>

```csharp
private GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference <a name="GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationState">GoogleNetworkServicesMulticastGroupConsumerActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesMulticastGroupConsumerActivationState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationState">GoogleNetworkServicesMulticastGroupConsumerActivationState</a>

---


### GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupConsumerActivation.GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts">GoogleNetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---



