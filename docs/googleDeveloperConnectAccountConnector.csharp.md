# `googleDeveloperConnectAccountConnector` Submodule <a name="`googleDeveloperConnectAccountConnector` Submodule" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectAccountConnector <a name="GoogleDeveloperConnectAccountConnector" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnector(Construct Scope, string Id, GoogleDeveloperConnectAccountConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig">GoogleDeveloperConnectAccountConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig">GoogleDeveloperConnectAccountConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig">PutCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig">PutProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetCustomOauthConfig">ResetCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProviderOauthConfig">ResetProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomOauthConfig` <a name="PutCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig"></a>

```csharp
private void PutCustomOauthConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `PutProviderOauthConfig` <a name="PutProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```csharp
private void PutProviderOauthConfig(GoogleDeveloperConnectAccountConnectorProviderOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig"></a>

```csharp
private void PutProxyConfig(GoogleDeveloperConnectAccountConnectorProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDeveloperConnectAccountConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCustomOauthConfig` <a name="ResetCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetCustomOauthConfig"></a>

```csharp
private void ResetCustomOauthConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProviderOauthConfig` <a name="ResetProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```csharp
private void ResetProviderOauthConfig()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDeveloperConnectAccountConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDeveloperConnectAccountConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDeveloperConnectAccountConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDeveloperConnectAccountConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectAccountConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfig">CustomOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.oauthStartUri">OauthStartUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfig">ProviderOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference">GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference">GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorIdInput">AccountConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfigInput">CustomOauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfigInput">ProviderOauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorId">AccountConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomOauthConfig`<sup>Required</sup> <a name="CustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference CustomOauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthStartUri`<sup>Required</sup> <a name="OauthStartUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.oauthStartUri"></a>

```csharp
public string OauthStartUri { get; }
```

- *Type:* string

---

##### `ProviderOauthConfig`<sup>Required</sup> <a name="ProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference ProviderOauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference">GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeouts"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference">GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccountConnectorIdInput`<sup>Optional</sup> <a name="AccountConnectorIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```csharp
public string AccountConnectorIdInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomOauthConfigInput`<sup>Optional</sup> <a name="CustomOauthConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfigInput"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfig CustomOauthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProviderOauthConfigInput`<sup>Optional</sup> <a name="ProviderOauthConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProviderOauthConfig ProviderOauthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfigInput"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDeveloperConnectAccountConnectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---

##### `AccountConnectorId`<sup>Required</sup> <a name="AccountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorId"></a>

```csharp
public string AccountConnectorId { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectAccountConnectorConfig <a name="GoogleDeveloperConnectAccountConnectorConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountConnectorId,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleDeveloperConnectAccountConnectorCustomOauthConfig CustomOauthConfig = null,
    string DeletionPolicy = null,
    string Etag = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDeveloperConnectAccountConnectorProviderOauthConfig ProviderOauthConfig = null,
    GoogleDeveloperConnectAccountConnectorProxyConfig ProxyConfig = null,
    GoogleDeveloperConnectAccountConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.accountConnectorId">AccountConnectorId</a></code> | <code>string</code> | The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.customOauthConfig">CustomOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | custom_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.etag">Etag</a></code> | <code>string</code> | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.providerOauthConfig">ProviderOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountConnectorId`<sup>Required</sup> <a name="AccountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```csharp
public string AccountConnectorId { get; set; }
```

- *Type:* string

The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name.

Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#account_connector_id GoogleDeveloperConnectAccountConnector#account_connector_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#location GoogleDeveloperConnectAccountConnector#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#annotations GoogleDeveloperConnectAccountConnector#annotations}

---

##### `CustomOauthConfig`<sup>Optional</sup> <a name="CustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.customOauthConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfig CustomOauthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

custom_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#custom_oauth_config GoogleDeveloperConnectAccountConnector#custom_oauth_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#deletion_policy GoogleDeveloperConnectAccountConnector#deletion_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#etag GoogleDeveloperConnectAccountConnector#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#labels GoogleDeveloperConnectAccountConnector#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}.

---

##### `ProviderOauthConfig`<sup>Optional</sup> <a name="ProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProviderOauthConfig ProviderOauthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#provider_oauth_config GoogleDeveloperConnectAccountConnector#provider_oauth_config}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.proxyConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#proxy_config GoogleDeveloperConnectAccountConnector#proxy_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#timeouts GoogleDeveloperConnectAccountConnector#timeouts}

---

### GoogleDeveloperConnectAccountConnectorCustomOauthConfig <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorCustomOauthConfig {
    string AuthUri,
    string ClientId,
    string ClientSecret,
    string HostUri,
    string ScmProvider,
    string[] Scopes,
    string TokenUri,
    bool|IResolvable PkceDisabled = null,
    GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig ServiceDirectoryConfig = null,
    string SslCaCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.authUri">AuthUri</a></code> | <code>string</code> | The OAuth2 authrization server URL. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID of the OAuth application. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri">HostUri</a></code> | <code>string</code> | The host URI of the OAuth application. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider">ScmProvider</a></code> | <code>string</code> | The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The scopes to be requested during OAuth. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri">TokenUri</a></code> | <code>string</code> | The OAuth2 token request URL. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled">PkceDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable PKCE for this OAuth config. PKCE is enabled by default. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | SSL certificate to use for requests to a private service. |

---

##### `AuthUri`<sup>Required</sup> <a name="AuthUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.authUri"></a>

```csharp
public string AuthUri { get; set; }
```

- *Type:* string

The OAuth2 authrization server URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#auth_uri GoogleDeveloperConnectAccountConnector#auth_uri}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#client_id GoogleDeveloperConnectAccountConnector#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only.

The client secret of the OAuth application.
It will be provided as plain text, but encrypted and stored in developer
connect. As INPUT_ONLY field, it will not be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#client_secret GoogleDeveloperConnectAccountConnector#client_secret}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

The host URI of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#host_uri GoogleDeveloperConnectAccountConnector#host_uri}

---

##### `ScmProvider`<sup>Required</sup> <a name="ScmProvider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider"></a>

```csharp
public string ScmProvider { get; set; }
```

- *Type:* string

The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#scm_provider GoogleDeveloperConnectAccountConnector#scm_provider}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The scopes to be requested during OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#scopes GoogleDeveloperConnectAccountConnector#scopes}

---

##### `TokenUri`<sup>Required</sup> <a name="TokenUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri"></a>

```csharp
public string TokenUri { get; set; }
```

- *Type:* string

The OAuth2 token request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#token_uri GoogleDeveloperConnectAccountConnector#token_uri}

---

##### `PkceDisabled`<sup>Optional</sup> <a name="PkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled"></a>

```csharp
public bool|IResolvable PkceDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable PKCE for this OAuth config. PKCE is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#pkce_disabled GoogleDeveloperConnectAccountConnector#pkce_disabled}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#service_directory_config GoogleDeveloperConnectAccountConnector#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; set; }
```

- *Type:* string

SSL certificate to use for requests to a private service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#ssl_ca_certificate GoogleDeveloperConnectAccountConnector#ssl_ca_certificate}

---

### GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#service GoogleDeveloperConnectAccountConnector#service}

---

### GoogleDeveloperConnectAccountConnectorProviderOauthConfig <a name="GoogleDeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorProviderOauthConfig {
    string[] Scopes,
    string SystemProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">SystemProviderId</a></code> | <code>string</code> | Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#scopes GoogleDeveloperConnectAccountConnector#scopes}

---

##### `SystemProviderId`<sup>Optional</sup> <a name="SystemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```csharp
public string SystemProviderId { get; set; }
```

- *Type:* string

Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#system_provider_id GoogleDeveloperConnectAccountConnector#system_provider_id}

---

### GoogleDeveloperConnectAccountConnectorProxyConfig <a name="GoogleDeveloperConnectAccountConnectorProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorProxyConfig {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#enabled GoogleDeveloperConnectAccountConnector#enabled}

---

### GoogleDeveloperConnectAccountConnectorTimeouts <a name="GoogleDeveloperConnectAccountConnectorTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#create GoogleDeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#delete GoogleDeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#update GoogleDeveloperConnectAccountConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#create GoogleDeveloperConnectAccountConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#delete GoogleDeveloperConnectAccountConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#update GoogleDeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled">ResetPkceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `ResetPkceDisabled` <a name="ResetPkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled"></a>

```csharp
private void ResetPkceDisabled()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput">AuthUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput">PkceDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput">ScmProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput">TokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri">AuthUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled">PkceDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider">ScmProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri">TokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthUriInput`<sup>Optional</sup> <a name="AuthUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput"></a>

```csharp
public string AuthUriInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `PkceDisabledInput`<sup>Optional</sup> <a name="PkceDisabledInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput"></a>

```csharp
public bool|IResolvable PkceDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScmProviderInput`<sup>Optional</sup> <a name="ScmProviderInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput"></a>

```csharp
public string ScmProviderInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput"></a>

```csharp
public string SslCaCertificateInput { get; }
```

- *Type:* string

---

##### `TokenUriInput`<sup>Optional</sup> <a name="TokenUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput"></a>

```csharp
public string TokenUriInput { get; }
```

- *Type:* string

---

##### `AuthUri`<sup>Required</sup> <a name="AuthUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri"></a>

```csharp
public string AuthUri { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `PkceDisabled`<sup>Required</sup> <a name="PkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled"></a>

```csharp
public bool|IResolvable PkceDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScmProvider`<sup>Required</sup> <a name="ScmProvider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider"></a>

```csharp
public string ScmProvider { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; }
```

- *Type:* string

---

##### `TokenUri`<sup>Required</sup> <a name="TokenUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri"></a>

```csharp
public string TokenUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---


### GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">ResetSystemProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemProviderId` <a name="ResetSystemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```csharp
private void ResetSystemProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">SystemProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">SystemProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SystemProviderIdInput`<sup>Optional</sup> <a name="SystemProviderIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```csharp
public string SystemProviderIdInput { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SystemProviderId`<sup>Required</sup> <a name="SystemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```csharp
public string SystemProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProviderOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectAccountConnectorProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---


### GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference <a name="GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDeveloperConnectAccountConnectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---



