# `googleComputePublicAdvertisedPrefix` Submodule <a name="`googleComputePublicAdvertisedPrefix` Submodule" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePublicAdvertisedPrefix <a name="GoogleComputePublicAdvertisedPrefix" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix google_compute_public_advertised_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicAdvertisedPrefix(Construct Scope, string Id, GoogleComputePublicAdvertisedPrefixConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig">GoogleComputePublicAdvertisedPrefixConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig">GoogleComputePublicAdvertisedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDnsVerificationIp">ResetDnsVerificationIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetIpv6AccessType">ResetIpv6AccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetPdpScope">ResetPdpScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputePublicAdvertisedPrefixTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsVerificationIp` <a name="ResetDnsVerificationIp" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDnsVerificationIp"></a>

```csharp
private void ResetDnsVerificationIp()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6AccessType` <a name="ResetIpv6AccessType" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetIpv6AccessType"></a>

```csharp
private void ResetIpv6AccessType()
```

##### `ResetPdpScope` <a name="ResetPdpScope" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetPdpScope"></a>

```csharp
private void ResetPdpScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputePublicAdvertisedPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicAdvertisedPrefix.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicAdvertisedPrefix.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicAdvertisedPrefix.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicAdvertisedPrefix.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputePublicAdvertisedPrefix resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputePublicAdvertisedPrefix to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputePublicAdvertisedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputePublicAdvertisedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference">GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIpInput">DnsVerificationIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipv6AccessTypeInput">Ipv6AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScopeInput">PdpScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIp">DnsVerificationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScope">PdpScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeouts"></a>

```csharp
public GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference">GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsVerificationIpInput`<sup>Optional</sup> <a name="DnsVerificationIpInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIpInput"></a>

```csharp
public string DnsVerificationIpInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `Ipv6AccessTypeInput`<sup>Optional</sup> <a name="Ipv6AccessTypeInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipv6AccessTypeInput"></a>

```csharp
public string Ipv6AccessTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PdpScopeInput`<sup>Optional</sup> <a name="PdpScopeInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScopeInput"></a>

```csharp
public string PdpScopeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputePublicAdvertisedPrefixTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsVerificationIp`<sup>Required</sup> <a name="DnsVerificationIp" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIp"></a>

```csharp
public string DnsVerificationIp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PdpScope`<sup>Required</sup> <a name="PdpScope" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScope"></a>

```csharp
public string PdpScope { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePublicAdvertisedPrefixConfig <a name="GoogleComputePublicAdvertisedPrefixConfig" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicAdvertisedPrefixConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IpCidrRange,
    string Name,
    string DeletionPolicy = null,
    string Description = null,
    string DnsVerificationIp = null,
    string Id = null,
    string Ipv6AccessType = null,
    string PdpScope = null,
    string Project = null,
    GoogleComputePublicAdvertisedPrefixTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp">DnsVerificationIp</a></code> | <code>string</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#id GoogleComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | The internet access type for IPv6 Public Advertised Prefixes. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.pdpScope">PdpScope</a></code> | <code>string</code> | Specifies how child public delegated prefix will be scoped. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#project GoogleComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#ip_cidr_range GoogleComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#name GoogleComputePublicAdvertisedPrefix#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#deletion_policy GoogleComputePublicAdvertisedPrefix#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#description GoogleComputePublicAdvertisedPrefix#description}

---

##### `DnsVerificationIp`<sup>Optional</sup> <a name="DnsVerificationIp" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp"></a>

```csharp
public string DnsVerificationIp { get; set; }
```

- *Type:* string

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#dns_verification_ip GoogleComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#id GoogleComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6AccessType`<sup>Optional</sup> <a name="Ipv6AccessType" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; set; }
```

- *Type:* string

The internet access type for IPv6 Public Advertised Prefixes.

It can be
set to one of following:

* EXTERNAL: Default access type. The prefix will be announced to the
  internet. All children PDPs will have access type as EXTERNAL.
* INTERNAL: The prefix won’t be announced to the internet. Prefix will
  be used privately within Google Cloud. All children PDPs will have
  access type as INTERNAL. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#ipv6_access_type GoogleComputePublicAdvertisedPrefix#ipv6_access_type}

---

##### `PdpScope`<sup>Optional</sup> <a name="PdpScope" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.pdpScope"></a>

```csharp
public string PdpScope { get; set; }
```

- *Type:* string

Specifies how child public delegated prefix will be scoped.

pdpScope
must be one of: GLOBAL, REGIONAL

* REGIONAL: The public delegated prefix is regional only. The
  provisioning will take a few minutes.
* GLOBAL: The public delegated prefix is global only. The provisioning
  will take ~4 weeks. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#pdp_scope GoogleComputePublicAdvertisedPrefix#pdp_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#project GoogleComputePublicAdvertisedPrefix#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.timeouts"></a>

```csharp
public GoogleComputePublicAdvertisedPrefixTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#timeouts GoogleComputePublicAdvertisedPrefix#timeouts}

---

### GoogleComputePublicAdvertisedPrefixTimeouts <a name="GoogleComputePublicAdvertisedPrefixTimeouts" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicAdvertisedPrefixTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#create GoogleComputePublicAdvertisedPrefix#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#delete GoogleComputePublicAdvertisedPrefix#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#create GoogleComputePublicAdvertisedPrefix#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_public_advertised_prefix#delete GoogleComputePublicAdvertisedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference <a name="GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputePublicAdvertisedPrefixTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

---



